import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomAppBar from './CustomAppBar'
import Home from './pages/Home';
import Cities from './pages/Cities';
import Footer from './Footer';
import City from './pages/City';
import SignUp from "./users/SignUp";
import SignIn from "./users/SignIn";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './styles/App.css';

// import { LineAxisOutlined } from '@mui/icons-material';
// import { useEffect } from 'react'
// import React, {useEffect,useState} from 'react' //////25.02///////
//import axios from 'axios' /////25.02////
//import ApiCall from './components/QUICOSAMETTERE?'  //////25.02//////
//import FromMyApi from './components/QUICOSAMETTERE?' ////25.02/////
// import axios from 'axios'  ///////25.02//////
////25.02//////

//const App = () => {
//const [input,setInput]=useState()
//const [apidata, setApiData ]= useState([])


// useEffect(() => {
//   axios.get(`http://`).then(response => setApiData(response))

//   axios.get(`http://localhost:4000/api/cities`).then(response => console.log(response.data.response.cities))
// },[])
//console.log(apidata)


// return (
//   <Router>
//     <ThemeProvider theme={theme}>
//       <CustomAppBar />
//     </ThemeProvider>
//     <Routes>
//       <Route exact path="/cities" element={<Cities />} />
//       <Route exact path="/home" element={<Home />} />
//       <Route exact path="/" element={<Home />} />
//     </Routes>
//     <Footer />
//   </Router>
// );
//}

//export default App;

////END 25.02////



const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#000000',
    },
  },
});

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CustomAppBar />
      </ThemeProvider>
      <Routes>
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/cities/:id" element={<City />} />
        <Route exact path="/cities" element={<Cities />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />

        {/* <Route exact path="/cardDetails" element={<CardDetails />} /> */}
        {/* <Route exact path="/carDetails/:id" element={<CardDetails />}  */}
      </Routes>
      <Footer />
    </Router>
  );
}

