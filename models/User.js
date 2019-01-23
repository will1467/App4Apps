const Sequelize = require('sequelize'); 
const db = require ('../db');

db.query('CREATE SCHEMA IF NOT EXISTS "AppForApps";');
const User = db.define('User', {
    UserId : {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    UserName : {
        type: Sequelize.STRING
    },
    Password : {
        type: Sequelize.STRING
    },
    Email : {
        type: Sequelize.STRING
    }
}, {
    schema : 'AppForApps'
})

db.sync();

module.exports = User;