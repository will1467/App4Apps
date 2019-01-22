const Sequelize = require('sequelize');
const config = require('./config');

console.log("Connection String", config.DATABASE_URL);

var db = null;

if (process.env.NODE_ENV === 'production'){
    db = new Sequelize(config.DATABASE_URL);
    db.createSchema("AppForApps");
} else {
    db = new Sequelize('AppForApps', 'postgres', 'root', {
        host: 'localhost',
        dialect: 'postgres'
    })
}

module.exports = db;