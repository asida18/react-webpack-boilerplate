import React from 'react';
import {transparentBg} from '../styles';
import ReactRouter, {Link} from 'react-router';

// Functional component
const Home = () => {
    return(
        <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
            <h1>React: Hello World!</h1>
            <p className="lead">This is a boilerplate</p>
            <Link to='/newComponent'>
                <button type="button" className="btn btn-lg btn-success">Navigate</button>
            </Link>
        </div>
    )
};

export default Home;
