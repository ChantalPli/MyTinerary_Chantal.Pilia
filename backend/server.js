const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const cities = require('./cities.json');

const port = 4000;
const app = express();

// const express = require('express')
// const PORT = 4000
// const app = express()

// require('dotenv').config()
// require('./config/database')

/////////////////////////////////////////

// const cityScheme = new mongoose.Schema({
//     name: String,
//     description: String,
//     image: String,
// });

// const City = new mongoose.model('cities', cityScheme);

/////////////////////////////////////////

// const cities = require('./cities.json');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/cities', /* async */(request, response) => {
    // const cities = await City.find();
    response.send(cities);
});

app.use('/images', express.static('./images'));

/////////////////////////////////////////

app.listen(port, () => console.log('Server started'));

// app.listen(PORT, () => console.log('server ready on port ' + PORT))