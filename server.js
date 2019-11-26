const express = require("express");
const path = require("path");

const app = express();
const connect = require("./config/db");
const bodyParser = require("body-parser");
const config = require("config");
var cors = require("cors");
var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

const Users = require("./routes/Users");
const Comments = require("./routes/Comments");
const Ideas = require("./routes/Ideas");

app.use("/api/user", Users);
app.use("/api/comment", Comments);
app.use("/api/idea", Ideas);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/src"));
    app.get("*", () => (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "src", "index.html"));
    });
} else {
    //Enable cors locally
    app.use(cors(corsOptions));
}

app.listen(process.env.PORT, () => {
    console.log("server started!");
    connect();
});
