import React from 'react';
import ReactRouter, {Link} from 'react-router';
import './component.css';


// Functional component
const Home = () => {
    return(
        <div className='jumbotron col-sm-12 text-center transparent'>
            <h1>React: Hello World!</h1>
            <p className="lead">This is a boilerplate</p>
            <Link to='/newComponent'>
                <button type="button" className="btn btn-lg btn-success">Navigate</button>
            </Link>
        </div>
    )
};

export default Home;
