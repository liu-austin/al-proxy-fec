// jshint esversion:6
const {Client} = require('pg');
const config = require('./config.json');
const db = new Client({
    user: config.user,
    host: config.host,
    database: config.database,
    password: config.password,
    port: 5432,
    sslmode: 'require',
    ssl: true
});

module.exports = db;