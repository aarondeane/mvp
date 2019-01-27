const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  complete: Boolean,
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;