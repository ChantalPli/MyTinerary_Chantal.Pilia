const Router = require('express').Router();

const citiesController = require('../controllers/citiesControllers');

const { obtainCities } = citiesController;

Router.route('/cities').get(obtainCities);

module.exports = Router;