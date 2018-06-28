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
    },
    Likes : {
        type : Sequelize.INTEGER
    } 
}, {
    schema : 'AppForApps'
})

const Comment = sequelize.define('Comment', {
    CommentId : {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    IdeaId : {
        type: Sequelize.INTEGER,
        references : {
            model: Idea,
            key: 'IdeaId',
        }
    },
    Text : {
        type: Sequelize.STRING
    },
    Author : {
        type: Sequelize.STRING
    },
    Likes : {
        type: Sequelize.INTEGER
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
            res.status(200).send(JSON.stringify(ideas));
    })
})

app.get("/commentget", function(req,res){
    Comment.findAll({
        where : {
            IdeaId : req.query.IdeaId
        }
    }).then(comments => {
        res.status(200).send(JSON.stringify(comments));
    })
})

app.post("/commentCreate", function(req,res){
    Comment.create({
        Text : req.body.Text,
        Author : req.body.Author,
        IdeaId: req.body.IdeaId,
        Likes : 0
    }).then(comment=> {
        res.status(200).send({success : true});
    }).error(err => {
        if(err) response.status(200).send({err: err})
    })
})

app.post("/commentDelete", function(req,res){
    Comment.find({where: {CommentId: parseInt(req.body.CommentId)}}).then(function(result){
        if(result){
            result.destroy({force : true});
            res.status(200).send(true);
        } else {
            res.status(200).send(false)
        }
    })
})

app.post("/commentLike", function(req,res){
    var updatedLikeCount = parseInt(req.body.Likes) + 1;
    Comment.find({where: {CommentId: parseInt(req.body.CommentId)}}).then(function(result){
        if(result){
            result.update({
                Likes : updatedLikeCount
            }).then(success => {
                if(success){
                    res.status(200).send({success: true})
                } else {
                    res.status(200).send({err: "Database could not be updated"})
                }
            })
        } else {
            res.status(200).send({err: "Comment not found"})
        }
    })
})

app.post("/ideaLike", function(req, res){
    var updatedLikeCount = parseInt(req.body.Likes) + 1;
    Idea.find({where: {IdeaId: parseInt(req.body.IdeaId)}}).then(function(result){
        if(result){
            result.update({
                Likes : updatedLikeCount
            }).then(success =>{
                if(success){
                    res.status(200).send({success : true})
                } else {
                    res.status(200).send({err: "Database could not be updated"})
                }
            })
        } else {
            res.status(200).send({err: "Idea not found"})
        }
    })
})

app.post("/ideacreate", function(req,res){
    Idea.create({
        Title : req.body.Title,
        Description : req.body.Description,
        Author : req.body.Author,
        Likes : 0,
    }).then( user => {
        res.status(200).send({success : true})
    }).catch(err => {
        if(err) response.status(200).send({err: err})
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
    cryptPassword(req.body.Password).then(password => {
        User.create({
            UserName: req.body.UserName,
            Password : password,
            Email : req.body.Email
        }).then(user => {
            var token = jwt.sign({id : user.UserId}, superNotSecretKey, {
                expiresIn : 86400
            });
            res.status(200).send({auth : true, token : token, user : user.UserName,  userid : user.UserId})
        })
    }).catch(err => {
        if(err) res.status(200).send({err: err})
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
                    response.status(200).send({auth : true, token : token, user : userDetails.UserName, userid : userDetails.UserId})
                } else {
                    response.status(200).send({err : "Password was incorrect"})
                }
            })

        }
    })
})

app.post('/authenticate', verifyToken, function(req, res, next){
    User.findById(req.UserId).then(function(user){
        if(!user) return res.status(200).send({auth: false, err : "No user found"});
        res.status(200).send(user);
    })
})

app.post("/userDelete", function(req, res){
    User.find({where: {UserId: parseInt(req.body.userId)}}).then(function(result){
        if(result){
            result.destroy({force : true});
            res.status(200).send(true);
        } else {
            res.status(200).send(false)
        }

    })
})

app.post("/ideaDelete", cascadeDeleteComments, function(req, res){
    Idea.find({where: {IdeaId : parseInt(req.body.IdeaId)}}).then(function(result) {
        if(result){
            result.destroy({force : true});
            res.status(200).send(true)
        } else {
            res.status(200).send(false)
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

function cascadeDeleteComments(req,res,next){
    Comment.find({where: {IdeaId: parseInt(req.body.IdeaId)}}).then(function(result){
        if(result){
            result.destroy({force : true});
            next();
        } else {
            res.status(200).send(false)
        }
    })
}

function verifyToken(req,res,next) {
    var token = req.headers['x-access-token'];
    if(!token){
        return res.status(200).send({auth : false, err : 'No token provided'})
    }

    jwt.verify(token, superNotSecretKey, function(err, decoded) {
        if(err){
            return res.status(200).send({auth : false, err : 'Failed to authenticate token'});
        }
        req.UserId = decoded.id;
        next();
    });
}


