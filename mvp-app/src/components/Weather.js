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
      result.daily.data.forEach(record => {
        forecast.push(record);
      })
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
;    return (
      <div className="weather-bar">
        <div className="day-tile">
          <span className="weather-icon">
            <img src={`https://s3-us-west-1.amazonaws.com/mvp-app-trimtab/${this.state.current.icon}.svg`} alt="curr-conditions-icon" />
          </span>
          <p className="curr-temp">{Math.ceil(this.state.current.temperature)}</p>
          <p className="label">{today}</p>
          <p className="curr-cond">{this.state.current.summary}</p>
        </div>
        {/* <Forecast days={this.props.days} today={todayNum} forecast={this.state.forecast} /> */}
      </div>
    )
  }  
}

export default Weather;
