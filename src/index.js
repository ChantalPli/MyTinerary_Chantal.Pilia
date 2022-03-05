import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import {Provider} from 'react-redux';  //04.03
//import {createStore, ApplyMiddleware} from 'redux'; 04.03
//import mainReducer from './redux/reducers/mainReducer'; 04.03
//import thunk from 'redux-thunk';

// const reduxStore = createStore(mainReducer, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={redux-store}> } 04.03
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
