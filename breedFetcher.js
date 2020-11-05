// External modules and aliases
const request = require('request');
const { log } = console;

// ------------- CLI-input -------------
const breed = process.argv[2];
  

// ------ Breed info handler--- ----
const callbackPrintBreedDesc = function(data) {
  if (data === '[]') {
    log('Breed not found!');
  } else {
    log(JSON.parse(data)[0].description);
  }
  process.exit();
};

// ----- Try to request a breed's info ---------
const reqURL = function(breed, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

  request(url, (error, response, body) => {

    if (response && response.statusCode === 200) {
      callback(body);

    } else if (!response) {
      console.log('Request failed! Try again later.');
      process.exit();
    } else {
      console.log(`Error ${response.statusCode} '${response.statusMessage}'`);
      process.exit();
    }
  });
};

reqURL(breed, callbackPrintBreedDesc);