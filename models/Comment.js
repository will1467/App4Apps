const mongoose = require("mongoose");
const Idea = require("../models/Idea");

const CommentSchema = mongoose.Schema({
    Idea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "idea"
    },
    Text: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    Likes: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;
