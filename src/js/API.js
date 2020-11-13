const BASE_URL = 'https://restcountries.eu/rest/v2/';


export default function searchCountries(name) {
//This loop returns a promise;
  return fetch(`${BASE_URL}name/${name}`)
    .then(response => response.json())
}

