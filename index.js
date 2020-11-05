// External modules and aliases
const { fetchBreedDescription } = require('./breedFetcher');
const { log } = console;

// ------------- CLI-input -------------
const breed = process.argv[2];
  

// ------ Breed info handler ------
fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    log('Error:', error);
  } else {
    log(desc);
  }
  process.exit();
});


