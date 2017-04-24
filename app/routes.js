import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import Home from './components/Home/Home.js';
import NewComponent from './components/NewComponent';


export default (
    <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='/newComponent' component={NewComponent} />
    </Route>
);
