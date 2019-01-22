const express = require('express');
const router = express.Router();

const Idea = require('../models/Idea');
const Comment = require('../models/Idea');

const cascadeDeleteComments = (id) => {
    Comment.find({where: {IdeaId: id}}).then(function(result){
        if(result){
            result.destroy({force : true});
        }
    })
}


router.get("/", function(req,res){
    Idea.all().then((ideas) => {
            res.status(200).send(JSON.stringify(ideas));
    })
})


router.post("/like", function(req, res){
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

router.post("/", function(req,res){
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

router.delete("/", function(req, res){
    Idea.find({where: {IdeaId : parseInt(req.query.id)}}).then(function(result) {

        cascadeDeleteComments(req.query.id);

        if(result){
            result.destroy({force : true});
            res.send(true)
        } else {
            res.send(false)
        }
    })
})

module.exports = router;