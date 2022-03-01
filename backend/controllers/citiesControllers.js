const cities = require('../models/cities');

const citiesController = {
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
        // console.log(request.body);
        new cities(request.body).save().then((data) => response.json(data));
        // const { city, image, description } = request.body;
        // new cities({
        //     name: city,
        //     description: description,
        //     image: image,
        // }).save()
        //     .then((respuesta) => response.json({ respuesta }));
    },
    deleteCity: async (request, response) => {
        response.json(await cities.findOneAndDelete({ _id: request.params.id }));
    },
    modifyCity: async (request, response) => {
        response.json(await cities.findOneAndUpdate({ _id: request.params.id }, request.body));
    }
};

module.exports = citiesController;