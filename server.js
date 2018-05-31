const reject = require('bcrypt/promises');
const resolve = require('url');


const express = require("express")
const cors = require('cors');
const Sequelize = require('sequelize');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const superNotSecretKey = "muchsecretmanywow";

const sequelize = new Sequelize('AppForApps', 'postgres', 'root', {
    host : 'localhost',
    dialect : 'postgres'
});

const User = sequelize.define('User', {
    UserId : {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    UserName : {
        type: Sequelize.STRING
    },
    Password : {
        type: Sequelize.STRING
    },
    Email : {
        type: Sequelize.STRING
    }
}, {
    schema : 'AppForApps'
})

const Idea = sequelize.define('Idea', {
    IdeaId : {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    Title : {
        type: Sequelize.STRING
    },
    Description : {
        type: Sequelize.STRING
    },
    Author : {
        type: Sequelize.STRING
    }
}, {
    schema : 'AppForApps'
})

const _HASH = 8;


//setup app
const app = express()
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "origin, X-Requested-With, content-type, accept, access-control-allow-origin, x-access-token");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });

  


app.use(bodyParser.json());

app.use("/dist", express.static(__dirname + "/dist"));

// app.get("/*", function(req, res){
//     res.sendFile(__dirname  + '/dist/index.html');
// })

app.get("/ideaget", function(req,res){
    Idea.all().then((ideas) => {
            res.send(JSON.stringify(ideas));
    })
})

app.post("/ideacreate", function(req,res){
    Idea.create({
        Title : req.body.Title,
        Description : req.body.Description,
        Author : req.body.Author
    }).then( user => {
        res.send(JSON.stringify(user))
    })
})

function cryptPassword(password){
    return new Promise(function(resolve, reject){
            bCrypt.hash(password, _HASH, function(err, hash){
                if(err) return reject(err);
                return resolve(hash)
            })
        })
}

app.post("/usercreate", function(req, res){
    console.log(req.body);
    cryptPassword(req.body.Password).then(password => {
        User.create({
            UserName: req.body.UserName,
            Password : password,
            Email : req.body.Email
        }).then(user => {
            var token = jwt.sign({id : user.UserId}, superNotSecretKey, {
                expiresIn : 86400
            });
            response.send({auth : true, token : token, user : userDetails.UserName,  userid : userDetails.UserId})
        })
    }).catch(err => {
        if(err) console.log(err);
    })
})

app.post("/login", function(req, response) {
    User.findOne({ where : {UserName : req.body.Username }}).then(user => {
        if(!user){
            response.send({err : "User was not found"})
        } else {
            var userDetails = user.get({plain: true});
            bCrypt.compare(req.body.Password, userDetails.Password, function(err, res){
                if(res === true){
                    var token = jwt.sign({id : userDetails.UserId}, superNotSecretKey, {
                        expiresIn : 86400
                    });
                    response.send({auth : true, token : token, user : userDetails.UserName, userid : userDetails.UserId})
                } else {
                    response.send({err : "Password was incorrect"})
                }
            })

        }
    })
})

app.post('/authenticate', verifyToken, function(req, res, next){
    User.findById(req.UserId).then(function(user){
        if(!user) return res.status(200).send({auth: false, message : "No user found"});
        res.send(user);
    })
})

app.get("/userdelete", function(req, res){
    User.find({where: {UserName: 'William'}}).then(function(result){
        if(result){
            result.destroy({force : true});
        } else {
            console.log("Not Found");
        }

    })
})

app.post("/ideaDelete", function(req, res){
    console.log(req.body.IdeaId);
    Idea.find({where: {IdeaId : parseInt(req.body.IdeaId)}}).then(function(result) {
        if(result){
            result.destroy({force : true});
            res.send(true)
        } else {
            res.send(false)
        }
    })
})

function testDBConnection(){
  sequelize.authenticate().then(() => {
    console.log('Connection to Postgres Successful!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}

app.listen(8888, ()=>{
    testDBConnection();
    console.log("server started!");
})

function verifyToken(req,res,next) {
    var token = req.headers['x-access-token'];
    if(!token){
        return res.status(403).send({auth : false, mssg : 'No token provided'})
    }

    jwt.verify(token, superNotSecretKey, function(err, decoded) {
        if(err){
            return res.status(200).send({auth : false, message : 'Failed to authenticate token'});
        }
        req.UserId = decoded.id;
        next();
    });
}


