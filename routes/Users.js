const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bCrypt = require("bcrypt");
const config = require("config");

const User = require("../models/User");

const _HASH = 8;
const verifyToken = require("./Auth");

router.post("/", async (req, res) => {
    try {
        const user = await User.findOne({ Email: req.body.Email });
        if (user) {
            return res.status(400).send({ err: "User already exists" });
        }
        const password = await bCrypt.hash(req.body.Password, _HASH);
        const newUser = new User({
            UserName: req.body.UserName,
            Password: password,
            Email: req.body.Email
        });
        await newUser.save();

        const token = jwt.sign({ id: newUser.id }, config.get("jwtSecret"), {
            expiresIn: 86400
        });

        res.status(200).send({ auth: true, token: token, user: user.UserName, userid: user.UserId });
    } catch (err) {
        console.error(err.message);
        res.status(200).send({ err: err.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ UserName: req.body.Username });
        if (!user) {
            return res.status(200).send({ err: "User was not found" });
        }

        const bMatch = await bCrypt.compare(req.body.Password, user.Password);
        if (bMatch) {
            const token = jwt.sign({ id: user.id }, config.get("jwtSecret"), {
                expiresIn: 86400
            });
            res.status(200).send({ auth: true, token: token, user: user.UserName, userid: user.id });
        } else {
            return res.status(200).send({ err: "Invalid Credentials" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(200).send({ err: err });
    }
});

router.get("/auth", async function(req, res, next) {
    var reqToken = req.get("x-access-token");
    try {
        const authToken = await verifyToken(reqToken);
        res.status(200).send(true);
    } catch (err) {
        res.sendStatus(403);
        //return next to stop execution (prevents "set headers after they are sent" error)
        return;
    }
});

router.delete("/", async (req, res) => {
    var reqToken = req.get("x-access-token");
    try {
        const authToken = await verifyToken(reqToken);
    } catch (err) {
        return res.sendStatus(403);
    }

    try {
        const user = await User.findById(req.query.id);
        if (!user) {
            return res.status(200).send(false);
        }

        await user.remove();
        res.status(200).send(true);
    } catch (err) {
        console.console.error();
        err.message;
        res.status(200).send({ err: err });
    }
});

module.exports = router;
