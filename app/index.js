import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';
import routes from './config/routes';
import css from './styles/main.css';
import fonts from './fonts/projectFonts.css';




ReactDOM.render(
    routes,
    document.getElementById('app')
);


// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
