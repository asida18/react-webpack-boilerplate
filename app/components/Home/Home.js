import React from 'react';
import styles from './component.css';
import ReactRouter, {Link} from 'react-router';

// Functional component
const Home = () => {
    return(
        <div className={'jumbotron col-sm-12 text-center ' + styles.homeComponent}>
            <h1>React: Hello World!</h1>
            <p className="lead">This is a boilerplate</p>
            <Link to='/newComponent'>
                <button type="button" className="btn btn-lg btn-success">Navigate</button>
            </Link>
        </div>
    )
};

export default Home;
