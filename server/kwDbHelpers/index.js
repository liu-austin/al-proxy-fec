// jshint esversion:6
const mongoose = require('mongoose');
const config = require('../config.json');
// mongoose.connect('mongodb://localhost/amenities-overview', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connect(config.mongouri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB connected successfully"));


let listingDetailsSchema = mongoose.Schema({
  listing_ID: Number,
  propertyType: String, 
  overview: {
    "Sleeps": {
      icon: String,
      data: Number
    },
    "Bedrooms": {
      icon: String,
      data: Number
    },
    "Bathrooms": {
      icon: String,
      data: Number
    },
    "Half Baths": {
      icon: String,
      data: Number
    },
    "Min Stay": {
      icon: String,
      data: String
    },
  },
  amenities: {
    "Featured": [Object],
    "Safety Features": [String],
    "Location Type": [String],
    "General": [String],
    "Kitchen": [String],
    "Dining": [String],
    "Entertainment": [String],
    "Outside": [String],
    "Pool/Spa": [String]
  },
  houseRules: {
    rules: [String],
    minAge: Number
  },
  tags: [String]
});

let listingDetails = mongoose.model('listingDetails', listingDetailsSchema);

let getOneListing = (id) => {
  return new Promise((resolve, reject) => {
    listingDetails.find({ listing_ID: id }, (err, docs) => {
      if (err) {
        reject(err);
      } else {
        resolve(docs);
      }
    });
  });
};

module.exports = {
  listingDetails,
  getOneListing
};