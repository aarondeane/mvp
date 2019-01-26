import React, { Component } from 'react';
import images from '../data/weather';

const Day = (props) => {
  return (
    <div className="day-tile">
      <span className="weather-icon">
      <img src='https://s3-us-west-1.amazonaws.com/mvp-app-trimtab/weather-cloudy.jpg'></img>
      </span>
      <p className="curr-temp">59</p>
      <p className="label">{props.day}</p>
      <p className="curr-cond">Cool</p>
    </div>
  )
};

export default Day;
