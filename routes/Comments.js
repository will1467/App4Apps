const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');

const verifyToken = require('./auth');

router.get("/", async function(req,res){

    var reqToken = req.get('x-access-token');
    try {
       const authToken = await verifyToken(reqToken);
    } catch(err){
       res.sendStatus(403);
       //return next to stop execution (prevents "set headers after they are sent" error)
       return;
    }

    Comment.findAll({
        where : {
            IdeaId : req.query.IdeaId
        }
    }).then(comments => {
        res.status(200).send(JSON.stringify(comments));
    })
})

router.post("/", async function(req,res){

    var reqToken = req.get('x-access-token');
    try {
       const authToken = await verifyToken(reqToken);
    } catch(err){
       res.sendStatus(403);
       //return next to stop execution (prevents "set headers after they are sent" error)
       return;
    }


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

router.delete("/", async function(req,res){

    var reqToken = req.get('x-access-token');
    try {
       const authToken = await verifyToken(reqToken);
    } catch(err){
       res.sendStatus(403);
       //return next to stop execution (prevents "set headers after they are sent" error)
       return;
    }


    Comment.find({where: {CommentId: req.query.id}}).then(function(result){
        if(result){
            result.destroy({force : true});
            res.status(200).send(true);
        } else {
            res.status(200).send(false)
        }
    })
})

router.post("/like", async function(req,res){

    var reqToken = req.get('x-access-token');
    try {
       const authToken = await verifyToken(reqToken);
    } catch(err){
       res.sendStatus(403);
       //return next to stop execution (prevents "set headers after they are sent" error)
       return;
    }

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

module.exports = router;
