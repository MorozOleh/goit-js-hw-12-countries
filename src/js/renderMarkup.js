import click from './pnotify.js';
import getRefs from './getRefs.js';
import onlyNameCountry from '../templates/onlyNameCountry.hbs';
import wholeInfAboutCountry from '../templates/wholeInfAboutCountry.hbs';
const refs = getRefs();

 export default function renderMarkup(map) {
  if (map.length > 2 && map.length < 10) {
    refs.card.innerHTML = onlyNameCountry(map.map(name => name.name));
  }
  
  if (map.length === 1) {
    refs.card.innerHTML = wholeInfAboutCountry(map[0]);
  }

  if (map.length > 10) {
    click();
  }
}