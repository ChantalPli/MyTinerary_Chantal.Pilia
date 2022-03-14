const Router = require('express').Router();

const cityController = require('../controllers/cityController');
const itineraryController = require('../controllers/itineraryController');
const activityController = require('../controllers/activityController');
const userControllers = require('../controllers/userControllers');

const {
    fetchCities,
    fetchCity,
    insertCity,
    modifyCity,
    deleteCity,
} = cityController;

Router.route('/cities').get(fetchCities);
Router.route('/cities/:id').get(fetchCity);
Router.route('/cities').post(insertCity);
Router.route('/cities/:id').put(modifyCity);
Router.route('/cities/:id').delete(deleteCity);

const {
    fetchItineraries,
    fetchItinerary,
    insertItinerary,
    modifyItinerary,
    deleteItinerary,
} = itineraryController;

Router.route('/itineraries').get(fetchItineraries);
Router.route('/itineraries/:id').get(fetchItinerary);
Router.route('/itineraries').post(insertItinerary);
Router.route('/itineraries/:id').put(modifyItinerary);
Router.route('/itineraries/:id').delete(deleteItinerary);

const {
    fetchActivities,
    fetchActivity,
    insertActivity,
    modifyActivity,
    deleteActivity,
} = activityController;

Router.route('/activities').get(fetchActivities);
Router.route('/activities/:id').get(fetchActivity);
Router.route('/activities').post(insertActivity);
Router.route('/activities/:id').put(modifyActivity);
Router.route('/activities/:id').delete(deleteActivity);


const { signUpUsers, signInUser, signOutUser } = userControllers;

Router.route('/auth/signup').post(signUpUsers)
Router.route('/auth/signin').post(signInUser)
Router.route('/auth/signout').post(signOutUser)

module.exports = Router;