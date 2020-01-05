// jshint esversion:6
const {Client} = require('pg');

const db = new Client({
    user: 'austinliu',
    host: 'localhost',
    database: 'pg_sdc',
    port: 5432
});

module.exports = db;