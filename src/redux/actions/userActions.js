import { ContentPasteSearchOutlined } from '@mui/icons-material'
import axios from 'axios'

import { url } from '../../api'

const userActions = {

    signUpUser: (userData) => {
        return async (dispatch, getstate) => {

            const res = await axios.post('http://localhost:4000/api/auth/signup', { userData })

            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            });

        }
    },

    signInUser: (loggedUser) => {
        return async (dispatch, getState) => {
            const user = await axios.post(url + '/api/auth/signin', { loggedUser })
            if (user.data.success) {
                localStorage.setItem("token", user.data.response.token);
                dispatch({
                    type: 'user',
                    payload: user.data.response.userData
                });
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                });
            } else { console.log(user.data.message) }
        }
    },
    ////
    signOutUser: (closeuser) => {
        return async (dispatch, getState) => {
            const user = await axios.post(url + '/api/auth/signout', { closeuser })
            if (user.data.success) {
                localStorage.removeItem("token");
                dispatch({ type: 'user/signout', payload: user.data.response.userData });
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                });
            } else { console.log(user.data.message) }
        }
    },

    VerificarToken: (token) => {

        return async (dispatch, getState) => {
            console.log(token)
            const user = await axios.get('http://localhost:4000/api/auth/signInToken', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            if (user.data.success) {
                console.log(user)
                dispatch({ type: 'user', payload: user.data.response });
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                });
            } else {
                localStorage.removeItem('token')
            }

        }
    }


}

export default userActions;