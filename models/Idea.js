const mongoose = require("mongoose");

const IdeaSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
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

const Idea = mongoose.model("idea", IdeaSchema);

module.exports = Idea;
