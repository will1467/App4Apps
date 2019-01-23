const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bCrypt = require('bcrypt');

const User = require('../models/User');

const _HASH = 8;
const superNotSecretKey = "muchsecretmanywow";

const verifyToken = require('./Auth');


const cryptPassword = (password) => {
    return new Promise(function(resolve, reject){
            bCrypt.hash(password, _HASH, function(err, hash){
                if(err) return reject(err);
                return resolve(hash)
            })
        })
}


router.post("/", function(req, res){
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

router.post("/login", function(req, response) {
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

router.get('/auth', async function(req, res, next){
    var reqToken = req.get('x-access-token');
    try {
       const authToken = await verifyToken(reqToken);
       res.status(200).send(true);
    } catch(err){
       res.sendStatus(403);
       //return next to stop execution (prevents "set headers after they are sent" error)
       return;
    }
})

router.delete("/", async function(req, res){

    var reqToken = req.get('x-access-token');
    try {
       const authToken = await verifyToken(reqToken);
    } catch(err){
       res.sendStatus(403);
       //return next to stop execution (prevents "set headers after they are sent" error)
       return next();
    }

    User.find({where: {UserId: parseInt(req.query.id)}}).then(function(result){
        if(result){
            result.destroy({force : true});
            res.status(200).send(true);
        } else {
            res.status(200).send(false)
        }

    })
})

module.exports = router;