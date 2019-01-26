import React, { Component } from 'react';
import Day from './Day';
import './Weather.css';

const Weather = (props) => {
  return (
    <div className="weather-bar">
      {props.days.map(day => 
        <Day key={day} day={day}/>
      )}
    </div>
  )
}

export default Weather;
