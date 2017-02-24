import React from 'react';
import ReactRouter,{ Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import Main from '../components/Main';
import Home from '../components/Home/Home.js';
import NewComponent from '../components/NewComponent';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const routes = (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={hashHistory}>
            <Route path='/' component={Main}>
                <IndexRoute component={Home} />
                <Route path='/newComponent' component={NewComponent} />
            </Route>
        </Router>
    </Provider>
);

export default routes;
