import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Clothe from './components/Clothe';
import GetLocation from './components/getLocation';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const API_KEY = "51fbf3d932973e8a177c849e922b87ab";

class App extends React.Component {
  state = {
   temperature: undefined,
   city: undefined,
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
    console.log(data);
    this.setState({error: data.cod});
    if(this.state.error == 404){
        this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "City not found!"
        });
    }
    else{
        if(city){
            console.log(data);
            switch (data.weather[0].main){
                case "Clouds":
                    this.setState({
                        description: <div>
                            <span>Cloud: </span>
                            <i className="fa fa-cloud"></i>
                        </div>
                    });
                    break;
                case "Clear":
                    this.setState({
                        description: <div>
                            <span>Clear: </span>
                            <i className="fa fa-sun-o"></i>
                        </div>
                    });
                    break;
                case "Rain":
                    this.setState({
                        description: <div>
                            <span>Rain: </span>
                            <i className="fa fa-tint"></i>
                        </div>
                    });
                    break;
                case "Snow":
                    this.setState({
                        description: <div>
                            <span>Snow: </span>
                            <i className="fa fa-snowflake-o"></i>
                        </div>
                    });
                    break;
                case "Drizzle":
                    this.setState({
                        description: <div>
                            <span>Drizzle: </span>
                            <i className="fa fa-snowflake-o"></i>
                        </div>
                    });
                    break;
                case "Haze":
                    this.setState({
                        description: <div>
                            <span>Haze: </span>
                            <i class="fa fa-bars"></i>
                        </div>
                    });
                    break;
            }
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
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
  }

  getLocation = async(e) => {
      e.preventDefault();

      const api_call_location = await fetch(`https://api.ipdata.co?api-key=test`);
      const data_location = await api_call_location.json();
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data_location.city}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      document.querySelector('.city').value = data_location.city;
      document.querySelector('.country').value = data.sys.country;
      this.setState({error: data.cod});
      if(this.state.error === 404){
          this.setState({
              temperature: undefined,
              city: undefined,
              country: undefined,
              humidity: undefined,
              description: undefined,
              error: "City not found!"
          });
      }
      else{
          if(data_location.city){
              console.log(data);
              switch (data.weather[0].main){
                  case "Clouds":
                      this.setState({
                          description: <div>
                              <span>Cloud: </span>
                              <i className="fa fa-cloud"></i>
                          </div>
                      });
                      break;
                  case "Clear":
                      this.setState({
                          description: <div>
                              <span>Clear: </span>
                              <i className="fa fa-sun-o"></i>
                          </div>
                      });
                      break;
                  case "Rain":
                      this.setState({
                          description: <div>
                              <span>Rain: </span>
                              <i className="fa fa-tint"></i>
                          </div>
                      });
                      break;
                  case "Snow":
                      this.setState({
                          description: <div>
                              <span>Snow: </span>
                              <i className="fa fa-snowflake-o"></i>
                          </div>
                      });
                      break;
                  case "Drizzle":
                      this.setState({
                          description: <div>
                              <span>Drizzle: </span>
                              <i className="fa fa-snowflake-o"></i>
                          </div>
                      });
                      break;
                  case "Haze":
                      this.setState({
                          description: <div>
                              <span>Haze: </span>
                              <i class="fa fa-bars"></i>
                          </div>
                      });
                      break;

              }
              this.setState({
                  temperature: data.main.temp,
                  city: data.name,
                  country: data.sys.country,
                  humidity: data.main.humidity,
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
  }
  render(){
    return(
        <div>
          <Titles />
          <Form getWeather={this.getWeather} />
          <GetLocation getLocation={this.getLocation} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            description={this.state.description}
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