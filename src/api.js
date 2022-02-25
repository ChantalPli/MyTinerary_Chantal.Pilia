const port = 4000;

const url = 'http://localhost:' + port;

function fetchCities() {
    return fetch(url + '/cities');
}

module.exports = { url, fetchCities };