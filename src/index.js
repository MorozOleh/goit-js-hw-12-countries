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
   const infoAboutCountries = country
    .map(({ name, capital, population, languages, flag }) => {
      const lang = languages.map(arr => arr.name);
      return { name, capital, population, lang , flag}
    });
  
   renderMarkup(infoAboutCountries);  
}


function onFetchError() {
  error('Countries have not found, try again');
}
