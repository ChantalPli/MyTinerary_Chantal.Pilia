import axios from 'axios'

import { url } from '../../api'

const userActions = {

    signUpUsers: (userData) => {
        return async (dispatch, getstate) => {

            const response = await axios.post(url + '/api/signup', { userData })

        }
    },

    signInUser: (loggedUser) => {

        return async (dispatch, getState) => {
            const user = await axios.post(url + '/api/signin', { loggedUser })
            if (user.data.success) {
                dispatch({ type: 'user', payload: user.data.response.userData });
            } else { console.log(user.data.message) }
        }
    },

    signOutUser: (closeuser) => {
        return async (dispatch, getState) => {
            const user = axios.post(url + '/api/signout', { closeuser })
        }
    }

}

export default userActions;