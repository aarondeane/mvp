import React, { Component } from 'react';
import reminders from '../data/reminders';

class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newReminder: null,
      reminders: reminders,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      newReminder: value,
    });
  }

  handleSubmit(event) {
    reminders.push(this.state.newReminder);
    event.preventDefault();
  }

  render() {
    return (
      <div className="reminders">
        <form onSubmit={this.handleSubmit}>
          <label>What Would You Like To Accomplish Today?</label>
          <input type="text" name="Goal" onChange={this.handleInputChange}/>
          <input type="submit" name="Submit" />
        </form>
        <ul className="reminder-list">
          {this.state.reminders.map(reminder => (
            <li>{reminder}</li>
          ))}
        </ul>
      </div>      
    )
  }
}

export default Reminders;