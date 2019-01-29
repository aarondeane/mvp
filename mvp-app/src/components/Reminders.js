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

  handleCompleted(event) {
    const target = event.target;
    const value = target.checked;
    const id = target.id;
    console.log(id);
    fetch('/api/reminders', {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .catch(err => console.error('Error: ', err));    
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    
    this.setState({
      newReminder: value,
    });
  }

  handleSubmit(event) {
    let data = {
      text: this.state.newReminder,
      complete: this.state.complete,
    };
    
    fetch('/api/reminders', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      fetch('/api/reminders')
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          newReminder: '',
          reminders: result,
        })
      })
    })
    .catch(err => console.error('Error: ', err))
    event.preventDefault();
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
          <label>What Would You Like To Accomplish Today?</label><br />
          <input type="text" name="Goal" onChange={this.handleInputChange}/><br/>
          <input type="submit" name="Submit" />
        </form>
        <ul className="reminder-list">
          {this.state.reminders.map(reminder => (
            <li key={reminder._id}>
              <input type="checkbox" id={reminder._id} onChange={this.handleCompleted}/>
              {reminder.text}
            </li>
          ))}
        </ul>
      </div>      
    )
  }
}

export default Reminders;