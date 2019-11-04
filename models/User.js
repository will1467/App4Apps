const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    }
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
