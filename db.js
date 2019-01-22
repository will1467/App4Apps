const Sequelize = require('sequelize');
const config = require('./config');

const db = new Sequelize('AppForApps', 'postgres', 'root', {
    host : config.DATABASE_URL,
    dialect : 'postgres'
});

module.exports = db;