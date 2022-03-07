const initialState = {
    filter: '',
    allCitiesReady: false,
    allCities: [],
    filteredCities: [],
    cityReady: false,
    city: null,
};

const citiesReducer = (state = initialState, action) => {
    const cityNameStartsWith = (city) => city.name.toLowerCase().startsWith(state.filter);
    switch (action.type) {
        case 'cities/obtain-all': {
            const allCities = action.payload; // guarda un array con todos los objetos ciudad o sea cada objeto es una ciudad 
            const filteredCities = state.filter === '' ? allCities : allCities.filter(cityNameStartsWith);
            return {
                ...state,
                allCitiesReady: true,
                allCities,
                filteredCities,
            };
        }

        case 'cities/obtain-one': { // payload guarda un objeto con todos los datos de la ciudad que se buscó
            return {
                ...state,
                cityReady: true,
                city: action.payload
            };
        }

        case 'cities/delete': {//payload guarda un objeto con todos los datos de la ciudad que se borró
            const allCities = state.allCities.filter(
                city => city._id !== action.payload._id
            );
            const filteredCities = state.filter === '' ? allCities : allCities.filter(cityNameStartsWith);
            return {
                ...state,
                allCities,
                filteredCities,
            }
        }
        case 'cities/insert': {// payload guarda un objeto con todos los datos de la ciudad que se registró
            // const allCities = store.allCities.concat([action.payload]);

            // const allCities = store.allCities.slice();
            // allCities.push(action.payload);

            const allCities = [...state.allCities, action.payload];
            const filteredCities = state.filter === '' ? allCities : allCities.filter(cityNameStartsWith);
            return {
                ...state,
                allCities,
                filteredCities,
            }
        }
        case 'cities/filter': {
            const filter = action.payload;
            const filteredCities = filter === '' ? state.allCities : state.allCities.filter((city) => city.name.toLowerCase().startsWith(filter));
            return {
                ...state,
                filter,
                filteredCities,
            }
        }
        default:
            // throw new Error("Unknown action");
            return state;
    }
}


export default citiesReducer;