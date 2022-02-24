const express = require('express');
const cors = require('cors');
const cities = require('./cities.json');

const api = express();

api.use(cors({
    origin: 'http://localhost:3000'
}));

api.get('/cities', (request, response) => {
    response.send(cities);
});

api.use('/assets', express.static('./assets'));

api.listen(4001);