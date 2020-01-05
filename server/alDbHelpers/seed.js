// jshint esversion:6
// jshint esversion:6
const faker = require('faker');
const db = require('../pgConnection');
db.connect();

  listingAdjectives = ['sunset roost', 'lux', 'perfect nest', 'private pool', 'lakefront', 'charming', 'family-friendly', 'secluded', 'beach front', 'relaxing', 'lake cabin', 'pine cone', 'stunning', 'gorgeous modern', 'estes mountain', 'river front', 'water front', 'charming', 'winter special', 'beautiful', 'magnificent', 'ocean view', 'mountain getaway', 'colonial', 'rustic', 'wondrous', 'perfect getaway', 'quiet', 'historical', 'modern', 'gulf front', 'relaxing river', 'summer breezes', 'enchanting rockwood', 'cowell beach', 'rustic country', 'resort', 'panoramic ocean view', 'executive mountain', 'executive beach', 'executive', 'comfortable and spacious', 'private', 'mountain lookout', 'scenic luxury', 'great escape', 'stone lodge', 'dream retreat', 'dream guesthouse', 'enchanting', 'luxury', 'lighthouse view', 'comfortable', 'bay front', 'perfect & affordable', 'beach', 'scenic', 'location, location!', 'delightful vacation', 'grand', 'large', 'beautiful contemporary', 'ocean block', 'elegant', 'breathtaking', 'new', 'riverside', 'beach bungalow', 'wild dunes', 'stargazer lodge', 'quaint & cozy', 'downtown', 'amazing views', 'centrally located', 'seaside', 'newly remodeled', 'family vacation spot', 'palm', 'luxury', 'dune', 'fine-private', 'winter views', 'summer views', 'fall views', 'spring views', 'restored', 'expansive', 'conveniently located', 'total remodel', 'hidden', 'chic', 'victorian', 'sandy pines', 'Norman Rockwell', 'stylish', 'greek', 'revival style', 'spacious', 'good value', 'at the water edge', 'designer', 'fun', 'sandcastle', 'sky ledge', 'alpine', 'free night!', 'summer beach', 'absolutely gorgeous', 'asian-inspired', 'autumn', 'wine country', 'classic', 'bayside', 'vacation', 'southwest', 'immaculate', 'island style', 'beautiful slope', 'upscale', 'vintage', 'picturesque', 'redwood retreat', 'tuscan', 'cliffside', 'foresty', 'artistic', 'paradise', 'jet luxury', 'skyline view'];

  listingStyles = ['home', 'loft', 'chalet', 'house', 'beachhouse', 'guesthouse', 'cabin', 'skyloft', 'ranch', 'cottage', 'mansion', 'treehouse', 'lakehouse', 'townhouse', 'apartment', 'condo', 'resort', 'lodge', 'lodging', 'country house', 'manor', 'estate', 'summer home', 'winter lodge', 'retreat', 'log home', 'rental', 'castle'];

  listingType = ['House', 'Apartment', 'Condo', 'Townhouse'];

  listingAmenities = ['family-friendly', 'pet-friendly', 'pool', 'gated community', 'fooseball', 'trampoline', 'spa', 'close walk to beach', 'close walk to town', 'close to village', 'surrounded by woods', 'golf resort', 'ski resort', 'gourmet kitchen', 'fishing', 'hiking-friendly', 'amazing garden', 'backyard wilderness', 'yacht', 'boating', 'close to downtown', 'game room', 'ac/heating', 'hot tub', 'jacuzzi', 'bicycles', 'surf', 'great amenities', 'nearby pond', 'fireplace', 'nearby lake', 'garage parking', 'great for photography', 'gym', 'loofers', 'fireplace', 'wildlife', 'nearby trails', 'close to train station', 'stargazing', 'vineyards', 'paddle-boat', 'kayak', 'dock', 'fitness center'];

  listingReview = ['Great.', 'Great find.', 'Beautiful view.', 'Great bargain.', 'Good ammenities.', 'Spectacular views.', 'Convenient location.', 'Excellent.', 'Wonderful.', 'Exceptional.', 'Very good.', 'Good for families.'];

  months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  datesInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  years = [2019, 2020];

  dates = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

  generateBookingDates= (listing_id) => {
    let date;

    // for (let i = 0; i < years.length; i++) {
    //   for (let j = 0; j < datesInMonths.length; j++) {
    //     for (let k = 0; k < datesInMonths[j]; k++) {
      for (let l = 1; l < 106; l++) {
        let rate = Math.floor(Math.random() * 750 + 50);
        // date = years[i] + '-' + months[j] + '-' + dates[k];
        date = '2020-09-17';
        let query = `INSERT INTO bookingdate (id, date, available, check_in, rate, check_out, listing_id) VALUES ($$${l}$$, $$${date}$$, false, false, $$${rate}$$, false, $$${l}$$)`;
        db.query(query, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
            }
        });
      }
//     }
//   }
// }
  };

  generateListings = () => {
    let k;
    for (let i = 0; i < 105; i++) {
      let titleF = listingAdjectives[Math.floor(Math.random() * listingAdjectives.length)] + ' ' + listingStyles[Math.floor(Math.random() * listingStyles.length)] + ' ' + listingAmenities[Math.floor(Math.random() * listingStyles.length)] + ' ' + listingAmenities[Math.floor(Math.random() * listingStyles.length)];
      let title = titleF.slice(0, 1).toUpperCase() + titleF.slice(1);
      let venue_type = listingType[Math.floor(Math.random() * listingType.length)];
      let bedrooms = Math.floor(Math.random() * 5 + 1);
      let sleep_capacity = bedrooms * 2 + Math.floor(Math.random() * 3 + 1);
      let bathrooms = Math.floor(Math.random() * 3 + 1);
      let square_feet = Math.floor(Math.random() * 600 + 1) * 10 + 1000;
      let review_overview = listingReview[Math.floor(Math.random() * listingReview.length)];
      let rating = Math.floor(Math.random() * 10) / 10 + 4;
      let review_number = Math.floor(Math.random() * 200 + 15);
      let owner = faker.name.findName();
      let cleaning_fee = Math.floor(Math.random() * 100) + 10;
      let state = faker.address.state();
      let city = faker.address.city();
      k = i + 1;
      let pic = `https://austin-service-house-pics.s3-us-west-1.amazonaws.com/${k}.jpg`;
      let query = `INSERT INTO listing (id, title, venue_type, bedrooms, bathrooms, sleep_capacity, square_feet, review_overview, rating, review_number, owner, cleaning_fee, state, city, pic) VALUES ($$${k}$$, $$${title}$$, $$${venue_type}$$, $$${bedrooms}$$, $$${bathrooms}$$, $$${sleep_capacity}$$, $$${square_feet}$$, $$${review_overview}$$, ${rating}, $$${review_number}$$, $$${owner}$$, $$${cleaning_fee}$$, $$${state}$$, $$${city}$$, $$${pic}$$)`;
      db.query(query, (err, results) => {
          if (err) {
              console.log(err);
          } else {
              console.log(results);
          }
      });
    }
    // console.log(listings);
  };

  generateListings();
  generateBookingDates();