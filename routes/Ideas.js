const express = require("express");
const router = express.Router();

const Idea = require("../models/Idea");
const auth = require("../routes/Auth");

router.get("/", auth, async (req, res) => {
    try {
        const ideas = await Idea.find();
        res.status(200).send(JSON.stringify(ideas));
    } catch (err) {
        console.error(err.message);
        res.status(200).send({ err: err.message });
    }
});

router.post("/like", auth, async (req, res, next) => {
    try {
        const idea = await Idea.findById(req.body._id);
        if (!idea) {
            return res.status(200).send({ err: "Idea not found" });
        }

        let updatedLikeCount = parseInt(req.body.Likes) + 1;
        idea.Likes = updatedLikeCount;
        await idea.save();
        res.status(200).send({ success: true });
    } catch (err) {
        console.error(err.message);
        res.status(200).send({ err: err.message });
    }
});

router.post("/", auth, async (req, res) => {
    try {
        const newIdea = new Idea({
            Title: req.body.Title,
            Description: req.body.Description,
            Author: req.body.Author,
            Likes: 0
        });

        await newIdea.save();
        res.status(200).send({ success: true });
    } catch (err) {
        console.error(err.message);
        res.status(200).send({ err: err.message });
    }
});

router.delete("/", auth, async (req, res) => {
    try {
        const idea = await Idea.findById(req.query.id);
        //TODO: Cascade delete comments
        if (!idea) {
            return res.status(200).send({ err: "Idea not found" });
        }

        await idea.remove();
        res.send(true);
    } catch (error) {
        console.error(err.message);
        res.status(200).send({ err: err.message });
    }
});

module.exports = router;
