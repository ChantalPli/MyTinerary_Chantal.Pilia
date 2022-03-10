const axios = require('axios');

const port = 4000;

const url = 'http://localhost:' + port;

function fetchCities() {
    return axios.get(url + '/api/cities');
}

function fetchCity(id) {
    return axios.get(url + '/api/cities/' + id);
}

function fetchItineraries(queryObject) {
    let queryString = '';
    if (queryObject) {
        // e.g: query = { city: '1', title: 'Tour' }
        const entries = Object.entries(queryObject);
        // entries = [ ['city', '1'], ['title', 'Tour'] ]
        const mappedEntries = entries.map(item => item[0] + '=' + item[1]);
        // mappedEntries = [ 'city=1', 'title=Tour' ]
        queryString = '?' + mappedEntries.join('&');
        // queryString = '?city=1&title=Tour'
    }
    return axios.get(url + '/api/itineraries' + queryString);
}

module.exports = { url, fetchCities, fetchCity, fetchItineraries };


