// jshint esversion:6
const db = require('../pgConnection');

db
  .connect()
  .then(() => {
    console.log("Connected To Postgres!!");
    db.query(`CREATE TABLE BookingDate (
        id serial NOT NULL,
        date VARCHAR,
        available BOOLEAN NOT NULL,
        check_in BOOLEAN NOT NULL,
        rate FLOAT(6),
        check_out BOOLEAN NOT NULL,
        listing_id INT
     );
     CREATE TABLE Listing (
        id serial PRIMARY KEY,
        title VARCHAR,
        venue_type VARCHAR,
        bedrooms INT,
        bathrooms INT,
        sleep_capacity INT,
        square_feet INT,
        review_overview VARCHAR,
        rating FLOAT(6),
        review_number INT,
        owner VARCHAR,
        cleaning_fee FLOAT(6),
        state VARCHAR,
        city VARCHAR,
        pic VARCHAR
      );`);
  })
  .catch(error => {
    console.log(error);
  });