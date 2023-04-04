'use strict';
/* const capitals = fetch('https://restcountries.com/v3.1/all');
console.log(capitals);

const getCapitals = function (capital) {
  fetch(`https://restcountries.com/v3.1/${capital}`).then;
  (function (response) {
    console.log(response);
  });
};
getCapitals('barbados'); */

// const getCapitals = function (capital) {
//   fetch(`https://restcountries.com/v3.1/all`)
//     .then(response => response.json())
//     .then(data => data);
// };
// getCapitals('india');
// console.log(getCapitals);

// const getCapitals = fetch('https://restcountries.com/v3.1/all')
//   .then(response => response.json())
//   .then(data => {
//     const capitals = data
//       .map(country => country.capital[0])
//       .filter(city => city === city.toUpperCase());
//     console.log(capitals);

//     const capitalCities = [...capitals];
//     console.log(capitalCities);
//   })
//   .catch(error => console.error(error));

/* const url = 'https://restcountries.com/v3.1/all';

fetch(url)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; index < data.length; i++) {
      arr.push(data[i].capital);
    }
    console.log(arr);
    return arr;
  })
  .catch(() => {}); */

const url = 'https://jsonplaceholder.typicode.com/users';

/* fetch(url)
  .then(response => response.json())
  .then(users => {
    users.map(user => {
      console.log(user.name);
    });
  })
  .catch(error => console.error(error)); */

// PROBLEM: TO INSERT ALL THE USERNAMES AT THE API
/*
1. Make the API Call - check
2. Identify the container where user names have to be inserted
3. start adding the user name li item to the container
*/

const listContainer = document.getElementById('users');
// const li = document.createElement('li')
// li.textContent = 'programming'
// listContainer.append(li)
// li.innerHTML = 'programming'
// li.innerHTML = '<h1>programming</h1>'
// const li2 = document.createElement('li')
// li2.textContent = 'coding'
// li2.innerHTML = 'coding'
// li2.innerHTML = '<h2>coding</h2>'
// listContainer.append(li2)

console.log(listContainer.textContent);
// console.log(listContainer.innerHTML)

fetch(url)
  .then(response => response.json())
  .then(users => {
    users.map(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      listContainer.append(li);
    });
  })
  .catch(error => console.error(error));
