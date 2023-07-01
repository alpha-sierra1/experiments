'use strict';

// API 1

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

// API 2

const dogPictures = document.getElementById('dogs');

const url1 = 'https://date.nager.at/api/v2/publicholidays/2020/US';
fetch(url1)
  .then(response => response.json())
  .then(dogs => {
    dogs.map(name => {
      const li = document.createElement('li');
      li.textContent = name.localName;
      dogPictures.append(li);
    });
  });

// API 3
//const url3 = 'https://restcountries.com/#rest-countries';

fetch('https://restcountries.com')
  .then(response => response.json())
  .then(data => console.log(data));
