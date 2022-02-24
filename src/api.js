const url = 'http://localhost:4001';

function fetchCities() {
    return fetch(url + '/cities');
}

module.exports = { url, fetchCities };