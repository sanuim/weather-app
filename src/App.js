import React from "react";
import "./App.css";

//http://api.openweathermap.org/data/2.5/weather
const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const CITY = "Dębica";
const UNITS = "metric";
const APP_ID = "73a144cf01911538a898f0cdb4ec32d7";

const URL = `${API_URL}?q=${CITY}&units=${UNITS}&appid=${APP_ID}`;

class App extends React.Component {
  state = {
    temperature: "",
    icon: "",
  };
  
  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.weather);
        this.setState({
          temperature: data.main.temp,
          icon: data.weather[0].icon,
        });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.temperature} &#8451;
        <img
          src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
        />
      </div>
    );
  }
}

export default App;
