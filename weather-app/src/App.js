import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Clothe from './components/Clothe';
import './App.css';

const API_KEY = "51fbf3d932973e8a177c849e922b87ab";

class App extends React.Component {
  state = {
   temperature: undefined,
   city: undefined,
   country: undefined,
   humidity: undefined,
   description: undefined,
   error: undefined
  }
  getWeather = async (e) =>{
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
        console.log(data);
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        });
    }
    else{
        this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter values"
        });
    }
  }
  render(){
    return(
        <div>
          <Titles />
          <Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            error={this.state.error}
          />
          <Clothe
              temperature={this.state.temperature}
          />
        </div>
    );
  }
};

export default App;