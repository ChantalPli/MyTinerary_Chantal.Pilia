const City = require('../models/City');

const cityController = {
    obtainCities: async (request, response) => {
        let result, error = null;
        try {
            result = await City.find().populate('itineraries');
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
            result = await City.find({ _id: request.params.id }).populate('itineraries');
        } catch (error) {
            console.log(error);
        }
        response.json({
            success: error ? false : true,
            content: error ? error : { city: result.length == 1 ? result[0] : null },
        });
    },
    insertCity: async (request, response) => {
        new City(request.body).save().then((data) => response.json(data));
    },
    deleteCity: async (request, response) => {
        response.json(await City.findOneAndDelete({ _id: request.params.id }));
    },
    modifyCity: async (request, response) => {
        response.json(await City.findOneAndUpdate({ _id: request.params.id }, request.body));
    }
};

module.exports = cityController;