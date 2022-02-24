import { createTheme, ThemeProvider } from '@mui/material/styles';

import CustomAppBar from './CustomAppBar'
import Home from './pages/Home';
import Cities from './pages/Cities';
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './styles/App.css';

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
