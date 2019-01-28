import React from 'react';

const Day = (props) => {
  let day = new Date();
  let today = props.days[day.getDay()];
  console.log(props)
  return (
    <div className="day-tile">
      <span className="weather-icon">
      <img src='https://s3-us-west-1.amazonaws.com/mvp-app-trimtab/weather-cloudy.jpg' alt="condition-icon"></img>
      </span>
      <p className="curr-temp">59</p>
      <p className="label">{props.day}</p>
      <p className="curr-cond">Cool</p>
    </div>
  )
};

export default Day;
