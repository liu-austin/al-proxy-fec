// jshint esversion:6
const db = require('../pgConnection');

db.connect();
for (let i = 1; i <= 10; i++) {
    let rooms = Math.floor(Math.random() * 6 + 1);
    let occupancy = Math.floor(Math.random() * 3 + 1) * rooms;
    let reviews = Math.floor(Math.random() * 30 + 1);
    let ratings = Math.ceil((Math.random() * 4) + 1);
    let price = Math.floor(Math.random() * 800) + 100;
    let query = `INSERT INTO listings (listingID, images, rooms, occupancy, reviews, ratings, price, similars) VALUES ($$${i}$$, '{"https://awayhome.s3-us-west-1.amazonaws.com/home${i}/home${i}-1.jpg", "https://awayhome.s3-us-west-1.amazonaws.com/home${i}/home${i}-2.jpg", "https://awayhome.s3-us-west-1.amazonaws.com/home${i}/home${i}-3.jpg", "https://awayhome.s3-us-west-1.amazonaws.com/home${i}/home${i}-4.jpg", "https://awayhome.s3-us-west-1.amazonaws.com/home${i}/home${i}-5.jpg", "https://awayhome.s3-us-west-1.amazonaws.com/home${i}/home${i}-6.jpg", "https://awayhome.s3-us-west-1.amazonaws.com/home${i}/home${i}-7.jpg", "https://awayhome.s3-us-west-1.amazonaws.com/home${i}/home${i}-8.jpg", "https://awayhome.s3-us-west-1.amazonaws.com/home${i}/home${i}-9.jpg", "https://awayhome.s3-us-west-1.amazonaws.com/home${i}/home${i}-10.jpg"}', $$${rooms}$$, $$${occupancy}$$, $$${reviews}$$, $$${ratings}$$, $$${price}$$, '{1,3,5,6,2}')`;
    console.log(query);
    db.query(query, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log(results);
        }
    });
}
