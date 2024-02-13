import React from 'react';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './redux/reducers/mainReducer';
import thunk from 'redux-thunk';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom'

// const root = createRoot(document.getElementById('root'));

// const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

// root.render(
//   <React.StrictMode>
//     <Provider store={reduxStore}>
//       <App />
//     </Provider>
//   </React.StrictMode>,

// );


const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
