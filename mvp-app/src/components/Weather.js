import React, { Component } from 'react';
import './Weather.css';
// import Forecast from './Forecast';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {
        temperature: null,
        summary: null,
        icon: null,
      },
      forecast: [],
    }
  }

  componentDidMount() {
    fetch('/api/weather')
    .then(response => {
      return response.json();
    })
    .then(result => {
      result = JSON.parse(result);
      let forecast = [];
      for(let i = 1; i < result.daily.data.length; i++) {
        forecast.push(result.daily.data[i]);
      }

      this.setState({
        current: {
          temperature: result.currently.apparentTemperature,
          summary: result.currently.summary,
          icon: result.currently.icon,
        },
        forecast: forecast
      })
    })
  }

  render () {
    let day = new Date();
    let todayNum = day.getDay();
    let today = this.props.days[todayNum];
    if (this.state.forecast.length === 0) {
      return(<div>Weather Data Loading...</div>)
    } else {
      return (
        <div className="weather-bar">
        {this.state.forecast.map((day, index) =>
          <div className="day-tile" key={index}>
            <span className="weather-icon">
              <img src={`https://s3-us-west-1.amazonaws.com/mvp-app-trimtab/${this.state.forecast[index].icon}.svg`} alt="curr-conditions-icon" />
            </span>
            <p className="curr-temp">{Math.ceil(this.state.forecast[index].temperatureLow)} | {Math.ceil(this.state.forecast[index].temperatureHigh)}</p>
            <p className="label">{this.props.days[index]}</p>
            <p className="curr-cond">{this.state.forecast[index].summary}</p>
          </div>
          )}  
        </div>
      )
    }
  }  
}

export default Weather;
