const cities = require('../models/cities');

const citiesController = {
    obtainCities: async (request, response) => {
        let citiesArray, error = null;
        try {
            citiesArray = await cities.find();
        } catch (error) {
            console.log(error);
        }
        response.json({
            success: error ? false : true,
            content: error ? error : { cities: citiesArray },
        });
    }
};

module.exports = citiesController;