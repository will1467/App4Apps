const express = require("express");
const router = express.Router();

const Comment = require("../models/Comment");

const verifyToken = require("./Auth");

router.get("/", async (req, res) => {
    var reqToken = req.get("x-access-token");
    try {
        const authToken = await verifyToken(reqToken);
    } catch (err) {
        return res.sendStatus(403);
    }

    try {
        const comments = Comment.find({ Idea: req.query.IdeaId });
        res.status(200).send(JSON.stringify(comments));
    } catch (err) {
        console.error(err.message);
        res.status(200).send({ err: err.message });
    }
});

router.post("/", async (req, res) => {
    var reqToken = req.get("x-access-token");
    try {
        const authToken = await verifyToken(reqToken);
    } catch (err) {
        return res.sendStatus(403);
    }

    try {
        const newComment = new Comment({
            Text: req.body.Text,
            Author: req.body.Author,
            Idea: req.body.IdeaId,
            Likes: 0
        });
        await newComment.save();
    } catch (err) {
        console.error(err.message);
        res.status(200).send({ err: err.message });
    }
});

router.delete("/", async function(req, res) {
    var reqToken = req.get("x-access-token");
    try {
        const authToken = await verifyToken(reqToken);
    } catch (err) {
        res.sendStatus(403);
        //return next to stop execution (prevents "set headers after they are sent" error)
        return;
    }

    Comment.find({ where: { CommentId: req.query.id } }).then(function(result) {
        if (result) {
            result.destroy({ force: true });
            res.status(200).send(true);
        } else {
            res.status(200).send(false);
        }
    });
});

router.post("/like", async function(req, res) {
    var reqToken = req.get("x-access-token");
    try {
        const authToken = await verifyToken(reqToken);
    } catch (err) {
        res.sendStatus(403);
        //return next to stop execution (prevents "set headers after they are sent" error)
        return;
    }

    var updatedLikeCount = parseInt(req.body.Likes) + 1;
    Comment.find({ where: { CommentId: parseInt(req.body.CommentId) } }).then(function(result) {
        if (result) {
            result
                .update({
                    Likes: updatedLikeCount
                })
                .then(success => {
                    if (success) {
                        res.status(200).send({ success: true });
                    } else {
                        res.status(200).send({ err: "Database could not be updated" });
                    }
                });
        } else {
            res.status(200).send({ err: "Comment not found" });
        }
    });
});

module.exports = router;
