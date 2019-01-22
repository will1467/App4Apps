const express = require("express")
const path = require('path');


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

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('/client/dist'));
  app.get("*", () => (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  })
}



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


