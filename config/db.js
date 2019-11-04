const mongoose = require("mongoose");
const config = require("config");

const connect = async () => {
    try {
        await mongoose.connect(config.get("mongoDBUri"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected!");
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = connect;
