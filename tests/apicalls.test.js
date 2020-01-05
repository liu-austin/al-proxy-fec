// jshint esversion:6
const axios = require('axios');

// LIVE SERVER TESTS REQUIRE ALL SERVICES TO BE RUNNING FOR THIS TEST SUITE TO WORK

it('Should return object of listing data with call to mlistings', () => {
    expect.assertions(1);
    return axios.get(`/mlistings/${Math.floor(Math.random() * 100 + 1)}`)
    .then(data => data.data[0])
    .then(listing => {
        expect(listing.pic.includes('https://austin-service-house-pics.s3-us-west-1.amazonaws.com')).toBe(true);
    });
});

it('Should return object of reviews data with call to reviews', () => {
    expect.assertions(1);
    return axios.get(`/reviews/${Math.floor(Math.random() * 100 + 1)}`)
    .then(data => data.data)
    .then(reviews => {
        expect(typeof(reviews[0])).toEqual('string');
    });
});

it('Should return object of amenities data with call to carousel-listings', () => {
    expect.assertions(1);
    return axios.get(`/carousel-listings/${Math.floor(Math.random() * 100 + 1)}`)
    .then(data => data.data)
    .then(listing => {
        expect(typeof(listing[0])).toEqual('string');
    });
});

it('Should return object of amenities data with call to amenities', () => {
    expect.assertions(1);
    return axios.get(`/amenities/${Math.floor(Math.random() * 100 + 1)}`)
    .then(data => data.data)
    .then(amenity => {
        expect(typeof(amenity[0])).toEqual('string');
    });
});