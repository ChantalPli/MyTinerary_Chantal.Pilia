import api from '../../api'

const citiesAction = {
    fetchCities: () => {
        return async (dispatch, getState) => {
            const response = await api.fetchCities();
            if (response.data.success) {
                dispatch({ type: 'cities/fetch-all', payload: response.data.content.cities });
            }
        }
    },

    fetchCity: (id, fetchItineraries = false) => {
        return async (dispatch, getState) => {
            const responseCity = await api.fetchCity(id);
            if (responseCity.data.success) {
                const city = responseCity.data.content.city;
                city.itineraries = [];
                if (fetchItineraries) {
                    const responseItineraries = await api.fetchItineraries({ city: id });
                    if (responseItineraries.data.success) {
                        city.itineraries = responseItineraries.data.content.itineraries;
                    }
                }
                dispatch({ type: 'cities/fetch-one', payload: city });
            }
        }
    },

    filterCities: (filter) => {
        return async (dispatch, getState) => {
            dispatch({ type: 'cities/filter', payload: filter });
        }
    }
};



// const productosActions = {
//     fetchearProductos: () => {
//         return async (dispatch, getState) => { //por qué una función en un return?redux no permite que las acciones sean asincronas por eso hay que hacer una funcion que retorne una funcion asincrona; in questo modo si evita questo problema/getState no hay que tocarlo 
//             const res = await axios.get('http://localhost:4000/api/productos')
//             dispatch({ type: 'fetch', payload: res.data.respuesta })
//         }
//     },
//     borrarProducto: (id) => {
//         return async (dispatch, getState) => {
//             try {

//                 const respuesta = await axios.delete('http://localhost:4000/api/productos/' + id)

//                 dispatch({ type: 'delete', payload: respuesta.data.respuesta })

//             } catch (err) {
//                 console.log(err)
//             }
//         }
//     },
//     filtrar: (productos, value) => {
//         return (dispatch, getState) => {
//             dispatch({ type: 'filtro', payload: { productos, value } })
//         }
//     },
//     cargarProducto: (name, precio) => {
//         return async (dispatch, getState) => {
//             const respuesta = await axios.post('http://localhost:4000/api/productos', { name, precio })
//             dispatch({ type: 'cargarProducto', payload: respuesta.data.respuesta })

//         }
//     }
// }

export default citiesAction;