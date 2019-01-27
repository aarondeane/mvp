import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import Reminders from './Reminders';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'],
      location: null,
    }
  }

  componentDidMount() {
    //let location = navigator.geolocation.getCurrentPosition();

    this.setState({
      location: 'San Francisco, CA',
    });
  }

  render() {
    return (
      <div className="App">
        <Weather days={this.state.days} location={this.state.location} />
        <Reminders />
      </div>
    );
  }
}

export default App;
