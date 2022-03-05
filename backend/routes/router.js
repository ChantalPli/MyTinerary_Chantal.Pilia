const Router = require('express').Router();

const cityController = require('../controllers/cityController');
const itineraryController = require('../controllers/itineraryController');
const activityController = require('../controllers/activityController');

const {
    obtainCities,
    obtainCity,
    insertCity,
    modifyCity,
    deleteCity,
} = cityController;

Router.route('/cities').get(obtainCities);
Router.route('/cities/:id').get(obtainCity);
Router.route('/cities').post(insertCity);
Router.route('/cities/:id').put(modifyCity);
Router.route('/cities/:id').delete(deleteCity);

const {
    obtainItineraries,
    obtainItinerary,
    insertItinerary,
    modifyItinerary,
    deleteItinerary,
} = itineraryController;

Router.route('/itineraries').get(obtainItineraries);
Router.route('/itineraries/:id').get(obtainItinerary);
Router.route('/itineraries').post(insertItinerary);
Router.route('/itineraries/:id').put(modifyItinerary);
Router.route('/itineraries/:id').delete(deleteItinerary);

const {
    obtainActivities,
    obtainActivity,
    insertActivity,
    modifyActivity,
    deleteActivity,
} = activityController;

Router.route('/activities').get(obtainActivities);
Router.route('/activities/:id').get(obtainActivity);
Router.route('/activities').post(insertActivity);
Router.route('/activities/:id').put(modifyActivity);
Router.route('/activities/:id').delete(deleteActivity);

module.exports = Router;