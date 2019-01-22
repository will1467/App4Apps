const Sequelize = require('sequelize'); 
const db = require ('../db');
const Idea = require('../models/Idea');

const Comment = db.define('Comment', {
    CommentId : {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    IdeaId : {
        type: Sequelize.INTEGER,
        references : {
            model: Idea,
            key: 'IdeaId',
        }
    },
    Text : {
        type: Sequelize.STRING
    },
    Author : {
        type: Sequelize.STRING
    },
    Likes : {
        type: Sequelize.INTEGER
    }
}, {
    schema : 'AppForApps'
})

db.sync();

module.exports = Comment;