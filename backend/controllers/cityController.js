const cities = require('../models/City');

const cityController = {
    obtainCities: async (request, response) => {
        let result, error = null;
        try {
            result = await cities.find();
        } catch (error) {
            console.log(error);
        }
        response.json({
            success: error ? false : true,
            content: error ? error : { cities: result },
        });
    },
    obtainCity: async (request, response) => {
        let result, error = null;
        try {
            result = await cities.find({ _id: request.params.id });
        } catch (error) {
            console.log(error);
        }
        response.json({
            success: error ? false : true,
            content: error ? error : { city: result.length == 1 ? result[0] : null },
        });
    },
    insertCity: async (request, response) => {
        new cities(request.body).save().then((data) => response.json(data));
    },
    deleteCity: async (request, response) => {
        response.json(await cities.findOneAndDelete({ _id: request.params.id }));
    },
    modifyCity: async (request, response) => {
        response.json(await cities.findOneAndUpdate({ _id: request.params.id }, request.body));
    }
};

module.exports = cityController;