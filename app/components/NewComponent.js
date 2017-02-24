import React from 'react';
import ReactRouter, {Link} from 'react-router';

// Functional component
const NewComponent = () => {
    return (
        <div className="jumbotron col-sm-12 text-center transparent">
            <h1>React: New Component!</h1>
            <p className="lead">This is a New component</p>
            <Link to='/'>
                <button type="button" className="btn btn-lg btn-danger">Go home</button>
            </Link>
        </div>
    )
};

export default NewComponent;
