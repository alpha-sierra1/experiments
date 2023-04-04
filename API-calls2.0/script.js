'use strict';

const taglineContainer = document.getElementById('beers');

const url = 'https://api.punkapi.com/v2/beers';

fetch(url)
  .then(response => response.json())
  .then(beers => {
    beers.map(beer => {
      const p = document.createElement('p');
      p.textContent = beer.tagline;
      taglineContainer.append(p);
      // console.log(beer.tagline);
    });
  })
  .catch(error => console.error(error));

// console.log(response);
