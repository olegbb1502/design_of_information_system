import React from 'react';

class GetLocation extends React.Component {
    render(){
        return(
            <button onClick={this.props.getLocation}>Get Location</button>
        );
    }
}

export default GetLocation;