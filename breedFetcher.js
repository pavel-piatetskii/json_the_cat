// External modules and aliases
const request = require('request');


// ----- Try to request a breed's info ---------
const fetchBreedDescription = function(breed, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

  request(url, (error, response, body) => {

    if (response && response.statusCode === 200) {
      
      //let description = '';
      if (body === '[]') {
        callback('Breed not found!', null);
        process.exit();
      }
      const { description } = JSON.parse(body)[0];
      callback(error, description);

    } else if (!response) {
      callback(error);
    } else {
      callback(`${response.statusCode} '${response.statusMessage}'`);
    }
  });
};

module.exports = { fetchBreedDescription };