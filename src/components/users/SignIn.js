import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { connect } from 'react-redux';
import userActions from "../../redux/actions/userActions";
import HeroImage from '../HeroImage';
import api from '../../api';

// function Copyright(props) {
//     return (


//         <Typography variant="body2" color="text.secondary" align="center" {...props}>


//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

const theme = createTheme();

function SignIn(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const loggedUser = {
            email: event.target.email.value,
            password: event.target.password.value,
            from: "signin"
        }
        props.signInUser(loggedUser);
    };
    if (props.user) //se l'usuario è connesso allora vai a home invece di farmi restare nella pagina del form
        window.location.href = '/';
    return props.user ? (<h1 className='message'>Redirecting...</h1>) : (

        <ThemeProvider theme={theme}>

            <HeroImage image={api.url + "/images/piemonte.jpg"}></HeroImage>

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 14,
                        marginBottom: 14,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value="chantal.trc@gmail.com"//TODO: Remove this line!!!!!!!!!!!remembeeeer
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value="12345678"//TODO: Remove this line!!!!!!!!!!!remembeeeer
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="#">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signup">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}
const mapStateToProps = (state) => {
    return {
        message: state.userReducer.message,
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps, userActions)(SignIn);