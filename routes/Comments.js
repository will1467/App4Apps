const express = require("express");
const router = express.Router();

const Comment = require("../models/Comment");
const auth = require("../routes/Auth");

router.get("/", auth, async (req, res) => {
    try {
        const comments = await Comment.find({ Idea: req.query.IdeaId });
        res.status(200).send(comments);
    } catch (err) {
        console.error(err.message);
        res.status(200).send({ err: err.message });
    }
});

router.post("/", auth, async (req, res) => {
    try {
        const newComment = new Comment({
            Text: req.body.Text,
            Author: req.body.Author,
            Idea: req.body.IdeaId,
            Likes: 0
        });
        await newComment.save();
        res.status(200).send({ success: true });
    } catch (err) {
        console.error(err.message);
        res.status(200).send({ err: err.message });
    }
});

router.delete("/", auth, async function(req, res) {
    try {
        const comment = await Comment.findById(req.query.id);
        if (!comment) {
            res.status(200).send({ err: "Comment not found" });
        }
        await comment.remove();
        res.status(200).send(true);
    } catch (err) {
        console.error(err.message);
        res.status(200).send({ err: err.message });
    }
});

router.post("/like", auth, async (req, res) => {
    try {
        let comment = await Comment.findById(req.body._id);
        if (!comment) {
            return res.status(200).send({ err: "Comment not found" });
        }

        let updatedLikeCount = parseInt(req.body.Likes) + 1;
        comment.Likes = updatedLikeCount;
        await comment.save();
        res.status(200).send({ success: true });
    } catch (err) {
        console.error(err.message);
        res.status(200).send({ err: err.message });
    }
});

module.exports = router;
