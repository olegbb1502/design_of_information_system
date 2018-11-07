import React from 'react';
import './Weather.css';

const Weather = props => {
    return(
        <div className="weather">
            {props.city && props.country && <p>Location: { props.city }, { props.country }</p>}
            {props.temperature && <p>Temperature: { props.temperature }&#8451;</p>}
            {props.humidity && <p>Humidity: { props.humidity }%</p>}
            {props.error && <h1 className="error-message">{ props.error }</h1>}
        </div>
    );
}

export default Weather;