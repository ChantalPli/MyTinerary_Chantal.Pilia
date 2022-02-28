const Router = require('express').Router();

const citiesController = require('../controllers/citiesControllers');

const { obtainCities, obtainCity } = citiesController;

Router.route('/cities').get(obtainCities);
Router.route('/cities/:id').get(obtainCity);

// const { obtainCities, loadCities, deleteCities, modifyCities} = citiesController;  ---26.02----
// .post(loadCities); ---26.02----
// Router.route('/cities/:id') ----26.02----
// .delete(deleteCities)
// .put(modifyCities)

module.exports = Router;