import React from 'react';
import {transparentBg} from '../styles';
import ReactRouter, {Link} from 'react-router';

// Functional component
const NewComponent = () => {
    return (
        <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
            <h1>React: New Component!</h1>
            <p className="lead">This is a New component</p>
            <Link to='/'>
                <button type="button" className="btn btn-lg btn-danger">Go home</button>
            </Link>
        </div>
    )
};

export default NewComponent;
