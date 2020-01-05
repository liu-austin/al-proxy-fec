// jshint esversion:8
const path = require('path')

const db = require('../pgConnection');

async function execute() {
    try {
        await db.connect();
        db.query(`DROP TABLE IF EXISTS listings`)
        .then((res) => console.log('listings table dropped'))
        .catch((err) => console.log(err,'error dropping table listings'));

        db.query('CREATE TABLE listings ( listingID INT,images varchar[],rooms INT,occupancy INT,reviews INT,ratings INT,price INT,similars integer[]);', (err, res) => {
            if (err){
                console.log(err,'error creating table ');
            } else console.log("listings table created");
            });
    } catch (ex) {
        console.log(`something wrong ${ex}`);
    }
}

execute();