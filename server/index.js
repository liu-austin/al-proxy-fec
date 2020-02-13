// jshint esversion:6
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3003;
const cors = require('cors');
const morgan = require('morgan');
const getter = require('./smDbHelpers/get');

// API HELPERS
const getOneListing = require('./kwDbHelpers/index').getOneListing;
const dbPg = require('./pgConnection');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/amenities/:id', ({ params }, res) => {
    getOneListing(params.id)
    .then((docs) => res.status(200).send(docs))
    .catch((err) => {
        console.log(err);
        res.status(404).send('Couldn\'t get listing details');
    });
});

app.get('/carousel-service/:id', (req, res) => {
    const id = parseInt(req.params.id);
    dbPg.query(`SELECT * FROM listings WHERE listingid=${id}`, (err, results) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(results.rows);
        }
    });
});

app.get('/dates/:id', (req, res) => {
    const id = parseInt(req.params.id);
    dbPg.query(`SELECT * FROM bookingdate WHERE listing_id = ${id}`, (err, results) => {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(results.rows);
    });
  });

  app.get('/mlistings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    dbPg.query(`SELECT * FROM listing WHERE id = ${id}`, (err, results) => {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(results.rows);
    });
  });

  app.get('/listings/search', (req, res) => {
    let results = [];
    dbPg.query(`SELECT * FROM listing WHERE title SIMILAR TO '(${req.query.query}%|%${req.query.query}%|${req.query.query.slice(0,1).toUpperCase() + req.query.query.slice(1)}%)' LIMIT 10;`, (err, titles) => {
      if (err) {
        res.status(404).send(err)
      }
      results.push(titles.rows);
      dbPg.query(`SELECT * FROM listing WHERE city SIMILAR TO '(${req.query.query}%|%${req.query.query}%|${req.query.query.slice(0,1).toUpperCase() + req.query.query.slice(1)}%)' LIMIT 10;`, (err, cities) => {
        if (err) {
          res.status(404).send(err)
        }
        results.push(cities.rows.slice(0, 10 - results.length));
        dbPg.query(`SELECT * FROM listing WHERE state SIMILAR TO '(${req.query.query}%|%${req.query.query}%|${req.query.query.slice(0,1).toUpperCase() + req.query.query.slice(1)}%)' LIMIT 10;`, (err, states) => {
          if (err) {
            res.status(404).send(err)
          }
          results.push(states.rows);
          res.status(200).send(results[0].concat(results[1].concat(results[2])));
        });
      });
    });
  });

  app.get('/reviews/:id',(req, res) => {
    let id = parseInt(req.params.id);
    dbPg.query(`SELECT * FROM reviews WHERE ListingId=$$${id}$$`, (err, results) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(results.rows);
        }
    });
  });
  
  app.get('/zips/:id', async (req, res) => {
    let id = parseInt(req.params.id);
    dbPg.query(`SELECT * FROM zips where ListingId=${id}`, (err, results) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(results.rows);
        }
    });
  });

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
