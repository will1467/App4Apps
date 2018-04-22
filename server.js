

const express = require("express")
const cors = require('cors');


//setup app
const app = express()
const bodyParser = require('body-parser');



app.use(bodyParser.json());

app.use("/src", express.static(__dirname + "/src"));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.get("/test", function(req, res){
    res.send("This is a test URL");
})

app.listen(8888, ()=>{
    console.log("server started!");
})


