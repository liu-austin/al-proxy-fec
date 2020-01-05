// jshint esversion:6

const db = require('../pgConnection');

db
  .connect()
  .then(() => {
    console.log("Connected To Postgres!!");
    db.query(`CREATE TABLE IF NOT EXISTS zips (
      zipcode varchar(255),
      ListingId int
    );
    CREATE TABLE IF NOT EXISTS reviews (
      rating INTEGER not NULL,
      dateS TEXT,
      title TEXT not null,
      review TEXT not null,
      dateP TEXT,
      author TEXT not null,
      aLocation TEXT,
      ownerR TEXT,
      ListingId INTEGER not Null
    );`);
  })
  .catch(error => {
    console.log(error);
  });