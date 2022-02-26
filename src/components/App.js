import { createTheme, ThemeProvider } from '@mui/material/styles';

import CustomAppBar from './CustomAppBar'
import Home from './pages/Home';
import Cities from './pages/Cities';
import Footer from './Footer';
// import React, {useEffect,useState} from 'react' //////25.02///////

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './styles/App.css';
// import { LineAxisOutlined } from '@mui/icons-material';
// import { useEffect } from 'react';
// import axios from 'axios'  ///////25.02//////

////25.02//////
// useEffect(() => {
//   axios.get('').then(response => setApiData(response))

//   axios.get('').then(response => console.log(response.data.response.cities))
// })
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
        <Route exact path="/cities" element={<Cities />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
