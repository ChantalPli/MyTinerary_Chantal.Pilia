import api from '../../api'

const citiesAction = {
    obtainCities: () => {
        return async (dispatch, getState) => {
            const response = await api.obtainCities();
            if (response.data.success) {
                dispatch({ type: 'cities/obtain-all', payload: response.data.content.cities });
            }
        }
    },


    obtainCity: (id) => {
        return async (dispatch, getState) => {
            const response = await api.obtainCity(id);
            if (response.data.success) {
                dispatch({ type: 'cities/obtain-one', payload: response.data.content.city });
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