import React, { Component } from 'react';

class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newReminder: '',
      reminders: [],
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
    let data = {
      text: this.state.newReminder,
      complete: false,
    };
    
    fetch('/api/reminders', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log('Reminder added!');
      this.setState({
        newReminder: ''
      });
    })
    .catch(err => console.error('Error: ', err))

    // event.preventDefault();
  }

  componentDidMount() {
    fetch('/api/reminders')
    .then(response => {
      return response.json();
    })
    .then(result => {
      this.setState({
        reminders: result,
      })
    })
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
            <li key={reminder._id}>{reminder.text}</li>
          ))}
        </ul>
      </div>      
    )
  }
}

export default Reminders;