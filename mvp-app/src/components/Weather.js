import React, { Component } from 'react';
import Day from './Day';
import './Weather.css';

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
      this.setState({
        current: {
          temperature: result.currently.apparentTemperature,
          sumamry: result.currently.summary,
          icon: result.currently.icon,
        },
        forecast: result.daily.data,
      })
    })

    this.setState({
      location: 'San Francisco, CA',
    });
  }

  render () {
    return (
      <div className="weather-bar">
        {this.props.days.map((index) => 
          <Day key={index} days={this.props.days} forecast={this.state.forecast[index]}/>
        )}
      </div>
    )
  }  
}

export default Weather;
