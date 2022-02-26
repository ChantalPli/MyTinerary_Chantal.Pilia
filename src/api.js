const axios = require('axios');

const port = 4000;

const url = 'http://localhost:' + port;

function obtainCities() {
    return axios.get(url + '/api/cities');
}

module.exports = { url, obtainCities };