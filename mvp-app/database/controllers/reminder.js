const Reminder = require('../models/reminder');
const db =require('../index');

const getAllReminders = (cb) => {
  Reminder.find((err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  })
}

const addNewReminder = (reminder, cb) => {
  console.log('Adding new reminder', reminder);
  Reminder.create(reminder, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};

const toggleCompleted = (reminder, status, cb) => {
  
};


module.exports = {
  getAllReminders,
  addNewReminder,
  toggleCompleted,
};