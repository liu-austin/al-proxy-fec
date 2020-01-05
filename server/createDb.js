// jshint esversion:6
const promise = require('bluebird'); // best promise library today
const pgp = require('pg-promise')({promiseLib: promise});
const sql = require('./dbHelpers');
const path = require('path');

async function createModel() {
    const connectionStringPg = 'postgres://localhost:5432/postgres';
    
    const dbPG = pgp(connectionStringPg);
    
    const createDBFullPath = path.join(__dirname, './createDb.sql');

    // const sqlDropDB = sql(dropDBFullPath);
    const sqlCreateDB = sql(createDBFullPath);
    
    try {
        await dbPG.none(sqlCreateDB);
        console.log('done creating db');
      } catch (error) {
        console.log(`error creating db: ${error}`);
      } 
}

createModel();

