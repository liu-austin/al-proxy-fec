// jshint esversion:6
const faker = require('faker');
const moment = require('moment');
const zipcodes = require('zipcodes');
const db = require('../pgConnection');
db.connect();
//Iteration count remembered via closure in genReview

  //creates 50M reviews
genReview = async () => {

  let locationProb = [1, 2, 3];
  //turns false when node needs to drain

    for (let j = 1; j <= 5000; j++) {
        let date = JSON.stringify(faker.date.between("2005-2-1", "2019-12-7")).slice(1, 11);
        let rating = Math.floor(Math.random() * 5) + 1;
        let dateS = JSON.stringify(faker.date.between('2005-2-1', '2019-12-7')).slice(1, 11);
        let title = faker.lorem.sentence();
        let review = faker.lorem.paragraph();
        randOwn = Math.floor(Math.random() * 11);
        randLoc = Math.floor(Math.random() * 4);
        let ListingId = Math.floor(Math.random() * 25) + 1;
        let dateP;
        if (locationProb[randLoc] === 2) {
            dateP = JSON.stringify(moment(date).add(1, 'M')).slice(1, 11);
        } else {
            dateP = dateS;
        }
        let author = faker.name.findName();
        let ownerR = faker.lorem.paragraph();
        let aLocation = `${faker.address.city()}, ${faker.address.stateAbbr()}`;
    //sets up event listener once node needs to drain, invokes function once drain is complete
        let query = `INSERT INTO reviews (rating, dateS, title, review, dateP, author, aLocation, ownerR, ListingId) VALUES ($$${rating}$$, $$${dateS}$$, $$${title}$$, $$${review}$$, $$${dateP}$$, $$${author}$$, $$${aLocation}$$, $$${ownerR}$$, $$${ListingId}$$)`;
        console.log(query);
        await db.query(query, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
            }
        });
    };
  };
// invokes CSV generating function
// genReview()
// .catch((err) => {
//   console.error(err);
// })

//reads the free zipcode database and creates a cache

//Iteration count remembered via closure in genLocations
let i = 1;

// creates batch of 10M zipcodes
genLocations = async () => {

    for (i; i <= 25; i++) {
        let zipcode = zipcodes.random();
        console.log(zipcode);
        let query = `INSERT INTO zips (zipcode, listingid) VALUES ($$${zipcode.zip}$$, ${i})`;
        db.query(query, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
            }
    });
    }
};

// creates zipcode cache, invokes CSV generating function
// getZipcodes()
// .then((data) => {
//   console.log('Zipcodes Cached!');
//   zipCache = data;
//   genLocations(zipCache)
// })
// .catch((err) => {
//   console.error(err);
// });

genReview();
// genLocations();