import React from 'react';
import { connect } from 'react-redux';
import userActions from "../../redux/actions/userActions";
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
import Countries from '../Countries'
import '../styles/SignUp.css'

function SignUp(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            picture: event.target[4].value,
            country: event.target[5].value,
            from: "signup"
        };
        props.signUpUser(userData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField sx={{ width: 300 }} type="text" />
            <TextField sx={{ width: 300 }} type="text" />
            <TextField sx={{ width: 300 }} type="email" />
            <TextField sx={{ width: 300 }} type="password" />
            <TextField sx={{ width: 300 }} type="url" />
            <Countries />
        </form>
    );
}


// const mapDispatchToProps = {
//     signUpUser: userActions.signUpUser
// }

export default connect(null, userActions)(SignUp)