import React, { Component } from 'react';

const Day = (props) => {
  return (
    <div className="day-tile">
      <span className="weather-icon">
      <img></img>
      </span>
      <p className="curr-temp">59</p>
      <p className="label">{props.day}</p>
      <p className="curr-cond">Cool</p>
    </div>
  )
};

export default Day;
