import React from 'react';
import { Component } from 'react';

// Class based component, needs access to props to render child components
class Main extends Component {
    render(){
        return(
            <div>
                {/* HEADER */}
                {this.props.children}
                {/* FOOTER */}
            </div>
        )
    }
};

export default Main;
