const db = require ('../db');
const Sequelize = require('sequelize');

const Idea = db.define('Idea', {
    IdeaId : {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    Title : {
        type: Sequelize.STRING
    },
    Description : {
        type: Sequelize.STRING
    },
    Author : {
        type: Sequelize.STRING
    },
    Likes : {
        type : Sequelize.INTEGER
    } 
}, {
    schema : 'AppForApps'
})

db.sync();
module.exports = Idea;