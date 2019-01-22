const express = require("express")


//setup app
const app = express()
const db = require ('./db');
const bodyParser = require('body-parser');
const config = require('./config');
var cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:4200'
}

app.use(cors(corsOptions));

app.use(bodyParser.json())

const Users = require('./routes/Users');
const Comments = require('./routes/Comments');
const Ideas = require('./routes/Ideas');

app.use("/api/user", Users);
app.use("/api/comment", Comments);
app.use("/api/idea", Ideas);

// app.use("/dist", express.static(__dirname + "/dist"));

// app.get("/*", function(req, res){
//     res.sendFile(__dirname  + '/dist/index.html');
// })



const testDBConnection = () => {
  db.authenticate().then(() => {
    console.log('Connection to Postgres Successful!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}

app.listen(config.SERVER_PORT, ()=>{
    testDBConnection();
    console.log("server started!");
})


