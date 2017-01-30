import React from 'react';

// Class based component, needs access to props to render child components
class Main extends React.Component {
    render(){
        return(
            <div className='main-container'>
                {this.props.children}
            </div>
        )
    }
};

export default Main;
