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
    },
    obtainCity: async (request, response) => {
        let citiesArray, error = null;
        try {
            citiesArray = await cities.find({ _id: request.params.id });
        } catch (error) {
            console.log(error);
        }
        response.json({
            success: error ? false : true,
            content: error ? error : { city: citiesArray[0] },
        });
    }
    // loadCities: async(req,res)=>{
    //     console.log(req.body)
    //     const {city, country, description} = req.body.dataInput
    //     new Cities({name: city, 
    //                  country:country,
    //                  description: description}).save()
    //         .then((respuesta) => res.json({respuesta}))
    // },

    // deleteCities: async (req,res)=>{
    //     const id = req.params.id


    //        await Cities.findOneAndDelete({_id:id})

    // },
    // modifyCities: async (req, res)=>{
    //     const id = req.params.id
    //     const city = req.body.dataInput

    //     let citydb = await Cities.findOneAndUpdate({_id:id}, city)
    //      console.log(citydb)

    // }











};







module.exports = citiesController;