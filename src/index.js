import "./styles.css";
const debounce = require('lodash.debounce');
import countries from './templates/countries.hbs';
import wholeInfAboutCountry from './templates/wholeInfAboutCountry.hbs';

import click from './js/pnotify.js';
import {App} from './js/pnotify.js'


const sam = document.querySelector('input')
  .addEventListener('input', debounce(onValue, 500));

function onValue(e) {
  e.preventDefault();
  let valueFromInput = e.target.value;
  
  fetch(`https://restcountries.eu/rest/v2/name/${valueFromInput}`)
    .then(response => response.json())
    .then(country => {
      let manyCountry = country.length;

      if (manyCountry === 1) {
        const markup = wholeInfAboutCountry(country)
        App.insertAdjacentHTML("beforeend", markup);
        e.target.value = '';
        return;
      }

      if (manyCountry <= 10 && manyCountry >= 2) {
      const markup = countries(country)
        App.insertAdjacentHTML("beforeend", markup);
        e.target.value = '';
        return;
      }
      
      if (manyCountry > 10) {
        click();
        e.target.value = '';
        return;
      }
    })
  
}



