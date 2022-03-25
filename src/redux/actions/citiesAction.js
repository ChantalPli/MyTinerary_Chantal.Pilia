import api from '../../api';
import axios from 'axios';

const citiesAction = {
    fetchCities: () => {
        return async (dispatch, getState) => {
            const response = await api.fetchCities();
            if (response.data.success) {
                dispatch({ type: 'cities/fetch-all', payload: response.data.content.cities });
            }
        }
    },

    fetchCity: (id, loadItineraries = false, loadActivities = false) => { // loadActivities si usa quando loadItin es = true//si ponemos activities true y itin es false se ignora activities
        return async (dispatch, getState) => {
            const responseCity = await api.fetchCity(id);
            if (responseCity.data.success) {
                const city = responseCity.data.content.city;
                city.itineraries = [];
                if (loadItineraries) {
                    const responseItineraries = await api.fetchItineraries({ city: id });
                    if (responseItineraries.data.success) {
                        city.itineraries = responseItineraries.data.content.itineraries;
                        //------------ACTIVITIES FOREACH ITINERARY----------/////
                        if (loadActivities) {
                            city.itineraries.forEach(async (itinerary) => {
                                const responseActivities = await api.fetchActivities({ itinerary: itinerary._id });
                                if (responseActivities.data.success) {
                                    itinerary.activities = responseActivities.data.content.activities;
                                }
                            })
                        }
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
    },

    likeDislike: (itineraryId) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            try {
                let response = await axios.put(`${api.url}/api/itineraries/like/${itineraryId}`, {},
                    {
                        headers: {
                            Authorization: "Bearer " + token
                        }
                    })
                if (response.data.success) {
                    dispatch({ type: "likeDislike", payload: { itineraryId, likes: response.data.response } })
                }
            } catch (error) {
            }
        }
    }
};

export default citiesAction;