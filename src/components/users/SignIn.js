import React from 'react';
import { connect } from 'react-redux';
import userActions from "../../redux/actions/userActions";
import { Link as LinkRouter } from "react-router-dom";

function SignIn(props) {

    const handleSubmit = (event) => {
        event.preventDefault()
        const loggedUser = {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "signin"
        }
        props.signInUser(loggedUser)

    }


    return (

        <form onSubmit={handleSubmit}>


//qui bisogna inserire il formulario


        </form>



    )
}





const mapDispatchToProps = {
    signInUser: userActions.signUpUser
}



export default connect(null, mapDispatchToProps)(SignIn)