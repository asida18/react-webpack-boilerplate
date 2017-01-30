import React from 'react';
import ReactRouter,{Router,Route,IndexRoute,hashHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home/Home.js';
import NewComponent from '../components/NewComponent';

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='/newComponent' component={NewComponent} />
        </Route>
    </Router>
);

export default routes;
