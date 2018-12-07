import React from 'react';
import './Weather.css';

const Weather = props => {
    return(
        <div className="weather">
            {props.temperature && <h1>{ props.temperature }&#8451;</h1>}
            {props.description && <h1>{props.description}</h1> }
            {props.error && <h1 className="error-message">{ props.error }</h1>}
        </div>
    );
}

export default Weather;