const Sequelize = require('sequelize');
const config = require('./config');

console.log("Connection String", config.DATABASE_URL);

var db = null;

if (process.env.NODE_ENV === 'production'){
    db = new Sequelize(config.DATABASE_URL);
    //Schema only needs to be created once
    db.query('CREATE SCHEMA IF NOT EXISTS "AppForApps";');
} else {
    db = new Sequelize('AppForApps', 'postgres', 'root', {
        host: 'localhost',
        dialect: 'postgres'
    })
}

module.exports = db;