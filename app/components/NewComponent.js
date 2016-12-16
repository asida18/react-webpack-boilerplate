const React = require('react');
const transparentBg = require('../styles').transparentBg;
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const NewComponent = React.createClass({
    render: function() {
        return (
            <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                <h1>React: New Component!</h1>
                <p className="lead">This is a New component</p>
                <Link to='/'>
                    <button type="button" className="btn btn-lg btn-danger">Go home</button>
                </Link>
            </div>
        )
    }
});

module.exports = NewComponent;
