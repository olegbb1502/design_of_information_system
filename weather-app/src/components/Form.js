import React from 'react';

class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.getWeather} className="form">
                <input type="text" name="city" placeholder="city" className="city" />
                <input type="text" name="country" placeholder="country" className="country" />
                <button>Get city</button>
            </form>
        );
    }
}

export default Form;