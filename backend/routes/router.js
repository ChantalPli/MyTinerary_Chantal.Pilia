const Router = require('express').Router();

const citiesController = require('../controllers/citiesControllers');

const {
    obtainCities,
    obtainCity,
    insertCity,
    modifyCity,
    deleteCity,
} = citiesController;

Router.route('/cities').get(obtainCities);
Router.route('/cities/:id').get(obtainCity);
Router.route('/cities').post(insertCity);
Router.route('/cities/:id').put(modifyCity);
Router.route('/cities/:id').delete(deleteCity);

module.exports = Router;