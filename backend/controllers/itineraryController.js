const Itinerary = require('../models/Itinerary');
const Activity = require('../models/Activity');

const itineraryController = {
    fetchItineraries: async (request, response) => {
        let result, error = null;
        try {
            // e.g: request.query = { city: "6219ac8a754e451ed1d630a1" }
            result = await Itinerary.find(request.query);
        } catch (error) {
            console.log(error);
        }
        response.json({
            success: error ? false : true,
            content: error ? error : { itineraries: result },
        });
    },
    fetchItinerary: async (request, response) => {
        let result, error = null;
        try {
            result = await Itinerary.find({ _id: request.params.id });
        } catch (error) {
            console.log(error);
        }
        response.json({
            success: error ? false : true,
            content: error ? error : { itinerary: result.length == 1 ? result[0] : null },
        });
    },
    insertItinerary: async (request, response) => {
        new Itinerary(request.body).save().then((data) => response.json(data));
    },
    deleteItinerary: async (request, response) => {
        response.json(await Itinerary.findOneAndDelete({ _id: request.params.id }));
    },
    modifyItinerary: async (request, response) => {
        response.json(await Itinerary.findOneAndUpdate({ _id: request.params.id }, request.body));
    }
};

module.exports = itineraryController;