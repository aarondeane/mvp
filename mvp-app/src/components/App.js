import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';
import Reminders from './Reminders';
import News from './News';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    }
  }

  render() {
    return (
      <div className="App">
        <Weather days={this.state.days} />
        <Reminders />
        <News />
      </div>
    );
  }
}

export default App;
