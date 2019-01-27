const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getAllReminders, addNewReminder, toggleCompleted } = require('../database/controllers/reminder');
const PORT = 5000;

//app.use(express.static(__dirname, 'build'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/reminders', (req, res) => {
  getAllReminders((err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(result);
    }
  })
})

app.post('/api/reminders', (req, res) => {
  console.log('Request heard', req.body);
  addNewReminder(req.body, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(result);
    }
  });
});


app.listen(PORT, ()=> console.log(`Express listening on port ${PORT}`));