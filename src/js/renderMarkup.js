import click from './pnotify.js';
import getRefs from './getRefs.js';
import onlyNameOfCountries from '../templates/onlyNameOfCountries.hbs';
import wholeInfoAboutCountry from '../templates/wholeInfoAboutCountry.hbs';
const refs = getRefs();

 export default function renderMarkup(infoAboutCountries) {
  if (infoAboutCountries.length > 2 && infoAboutCountries.length < 10) {
    refs.card.innerHTML = onlyNameOfCountries(infoAboutCountries.map(val => val.name));
  }
  
  if (infoAboutCountries.length === 1) {
    refs.card.innerHTML = wholeInfoAboutCountry(infoAboutCountries[0]);
  }

  if (infoAboutCountries.length > 10) {
    click();
  }
}