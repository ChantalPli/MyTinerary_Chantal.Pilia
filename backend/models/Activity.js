const mongoose = require('mongoose');
// const itineraries = mongoose.model('itineraries');

const activitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    itinerary: { type: mongoose.Schema.ObjectId, ref: 'Itinerary' }
});

const Activity = mongoose.model('Activity', activitySchema, 'activities');

module.exports = Activity;