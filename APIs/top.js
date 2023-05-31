//// Giphy App

// Declare img variable and link to img

const img = document.querySelector('img');

// Fetching data using fetch

fetch('https://api.giphy.com/v1/gifs/translate?api_key=mGWay0MRfopcreOrjHhrouhIc3lMAXlX&s=dogs', { mode: 'cors' })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  });



/* //// API form Giphy with key
'https://api.giphy.com/v1/gifs/translate?api_key=YWyS1bNKM0DAJRUR9igAsKY3YlkK9BrPl&s=cats'





// Weather App

fetch('https://api.weatherapi.com/v1/current.json?key=e0d3c7ebf93b4fb48c1121421233105&q=thabazimbi', {
  mode: 'cors',
})
  .then(function(response) {
    // successful response
  })
  .catch(function(err) {
    // error
  }); */