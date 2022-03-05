const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
})

const City = mongoose.model('City', citySchema, 'cities');

module.exports = City;
