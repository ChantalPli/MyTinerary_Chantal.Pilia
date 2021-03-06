const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const passport = require('passport');

require('dotenv').config();
require('./config/database');

const cities = require('./cities.json');

const port = 4000;
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json()); //para recibir la solicitud en formato json !!!!!!

app.use('/api', routes);

app.use('/images', express.static('./images'));
app.use('/avatars', express.static('./avatars'));
app.use(passport.initialize())

app.listen(port, () => console.log('Server started'));

/*****************************************************************/

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// // const cities = require('./cities.json');

// const port = 4000;
// const app = express();

// // const express = require('express')
// // const PORT = 4000
// // const app = express()

// require('dotenv').config();
// require('./config/database');

// /////////////////////////////////////////

// const citySchema = new mongoose.Schema({
//     name: String,
//     description: String,
//     image: String,
// });

// const City = new mongoose.model('cities', citySchema);

// /////////////////////////////////////////

// app.use(cors({
//     origin: 'http://localhost:3000'
// }));

// app.get('/api/cities', async (request, response) => {
//     const cities = await City.find();
//     response.send(cities);
// });

// app.use('/images', express.static('./images'));

// /////////////////////////////////////////

// app.listen(port, () => console.log('Server started'));

// // app.listen(PORT, () => console.log('server ready on port ' + PORT))