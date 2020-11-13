import "./styles.css";
import { error } from "@pnotify/core";
import searchCountries from './js/API.js'
import getRefs from'./js/getRefs.js';
import renderMarkup from './js/renderMarkup.js'


const refs = getRefs();
const debounce = require('lodash.debounce');
refs.form.addEventListener('input', debounce(onSearch, 500));


function onSearch(e) {
  e.preventDefault();
  const searchQuery = e.target.value;
  
  searchCountries(searchQuery)
    .then(country => mapArray(country))
    .catch(onFetchError)
    .finally(e.target.value = '');
}


function mapArray(country) {
   const map = country
    .map(({ name, capital, population, languages, flag }) => {
      const lang = languages.map(arr => arr.name);
      return { name, capital, population, lang , flag}
    });
  
   renderMarkup(map);  
}

function onFetchError() {
  error('Countries have not found, try again');
}




























































// App.insertAdjacentHTML('beforeend', '<div class="card"></div>')
// const contForCard = document.querySelector('.card');

// const inputOfCountry = document.querySelector('input')
//   .addEventListener('input', debounce(onValue, 500));

// function onValue(e) {
//   e.preventDefault();
//   let valueFromInput = e.target.value;
  
//   fetch(`https://restcountries.eu/rest/v2/name/${valueFromInput}`)
//     .then(response => response.json())
//     .then(country => {

//       if (country.length === 1) {
//         contForCard.innerHTML = wholeInfAboutCountry(country)
//         e.target.value = '';

//         return;
//       }

//       if (country.length <= 10 && country.length >= 2) {
//         contForCard.innerHTML = countries(country)
//         e.target.value = '';

//         return;
//       }
      
//       if (country.length > 10) {
//         click();
//         contForCard.innerHTML = "";
//         e.target.value = '';

//         return;
//       }
//     }).catch(() => { click() })
// }


// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1){
//   if (numbers[i] > 3) {
    
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers);

// const numbers = [1, 7, 4, 3, 5,6,7,8,9];
// const filteredNumbers = numbers
//   .filter(value => {


//     if (value <= 7) {
//       return value;
//     }
//   });

// console.log(filteredNumbers);

// const numbers = [1, 4, 1, 8, 7, 3,9];

// numbers.forEach((num, ind, arr) => {
//   if (num > 5) {
//     console.log(`index: ${ind}, array: ${arr}`);
//   }
// }
//   );
// 'use strict'
// console.log(this === window);


// this example about map;
// const numbers = [2, 3, 4];
// const doubleNumber = numbers.map(num => num * 4);

// console.log(doubleNumber);

// const user = [
//   { name: 'mango', isActive: true},
//   { name: 'tangerine', isActive: false},
//   { name: 'lemon', isActive: true},
// ]

// console.log(user.map(user => user.name));