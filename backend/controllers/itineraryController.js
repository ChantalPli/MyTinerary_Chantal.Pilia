const Itinerary = require('../models/Itinerary');
const Activity = require('../models/Activity');

const itineraryController = {
    obtainItineraries: async (request, response) => {
        let result, error = null;
        try {
            result = await Itinerary.find().populate('activities');
        } catch (error) {
            console.log(error);
        }
        response.json({
            success: error ? false : true,
            content: error ? error : { itineraries: result },
        });
    },
    obtainItinerary: async (request, response) => {
        let result, error = null;
        try {
            result = await Itinerary.find({ _id: request.params.id }).populate('activities');
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