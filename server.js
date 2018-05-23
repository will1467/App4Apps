const reject = require('bcrypt/promises');
const resolve = require('url');


const express = require("express")
const cors = require('cors');
const Sequelize = require('sequelize');
const bCrypt = require('bcrypt');

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
    res.setHeader("Access-Control-Allow-Headers", "origin, X-Requested-With, content-type, accept, access-control-allow-origin");
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
                console.log("hashing");
                if(err) return reject(err);
                console.log("Hash:" + hash);
                return resolve(hash)
            })
        })
}

app.post("/usercreate", function(req, res){
    cryptPassword(req.body.Password).then(password => {
        User.create({
            UserName: req.body.Username,
            Password : password,
            Email : req.body.Email
        }).then(user => {
            res.send(JSON.stringify(user))
        })
    }).catch(err => {
        if(err) console.log(err);
    })
})

app.post("/login", function(req, response) {
    User.findOne({ where : {UserName : req.body.Username }}).then(user => {
        if(!user){
            response.send(false)
        } else {
            var userDetails = user.get({plain: true});
            bCrypt.compare(req.body.Password, userDetails.Password, function(err, res){
                console.log("res : " + res);
                if(res === true){
                    response.send(true)
                } else {
                    response.send(false)
                }
            })

        }
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


