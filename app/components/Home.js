const React = require('react');
const transparentBg = require('../styles').transparentBg;
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;


const Home = React.createClass({
    render: function(){
        return(
            <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                <h1>React: Hello World!</h1>
                <p className="lead">This is a boilerplate</p>
                <Link to='/newComponent'>
                    <button type="button" className="btn btn-lg btn-success">Navigate</button>
                </Link>
            </div>
        )
    }
});

module.exports = Home;
