import "./styles.css";
const debounce = require('lodash.debounce');
import countries from './templates/countries.hbs';
import wholeInfAboutCountry from './templates/wholeInfAboutCountry.hbs';

import click from './js/pnotify.js';
import {App} from './js/pnotify.js'

App.insertAdjacentHTML('beforeend', '<div class="card"></div>')
const contForCard = document.querySelector('.card');

const inputOfCountry = document.querySelector('input')
  .addEventListener('input', debounce(onValue, 500));

function onValue(e) {
  e.preventDefault();
  let valueFromInput = e.target.value;
  
  fetch(`https://restcountries.eu/rest/v2/name/${valueFromInput}`)
    .then(response => response.json())
    .then(country => {

      if (country.length === 1) {
        contForCard.innerHTML = wholeInfAboutCountry(country)
        e.target.value = '';

        return;
      }

      if (country.length <= 10 && manyCountry >= 2) {
      contForCard.innerHTML = countries(country)
        e.target.value = '';

        return;
      }
      
      if (country.length > 10) {
        click();
        contForCard.innerHTML = "";
        e.target.value = '';

        return;
      }
    })
}



