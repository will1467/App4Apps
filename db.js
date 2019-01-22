const Sequelize = require('sequelize');
const config = require('./config');

console.log("Connection String", config.DATABASE_URL);

const db = new Sequelize('dci52fapfflq1', 'wpzgzqdwyntlkb', '91ad8617c811af48f163cb003ab77f92339dc6041ef557dbd20be51ececd56e4', {
    dialect : 'postgres'
});

db.createSchema("AppForApps");

module.exports = db;