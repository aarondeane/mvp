const express = require('express');
const app = express();
const request = require('request');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { geoLocationKey, darkSkyKey, newsAPIKey } = require('../API Keys/config');
const { getAllReminders, addNewReminder, toggleCompleted } = require('../database/controllers/reminder');
const PORT = 5000;

//app.use(express.static(__dirname, 'build'));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/api/reminders', (req, res) => {
  getAllReminders((err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json(result);
    }
  })
})

app.get('/api/news', (req, res) => {
  request.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIKey}`, (err, response, body) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(body);
    }
  })
})

app.get('/api/weather', (req, res) => {
  var lat = 0;
  var lng = 0;
  request.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${geoLocationKey}`, (err, response, body) => {
    if (err) {
      console.log(err);
    } else {
      lat = JSON.parse(body).location.lat;
      lng = JSON.parse(body).location.lng;

      request.get(`https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}?exclude=minutely,hourly`, (err, response, body) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json(body);
        }
      })
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

app.delete('/api/reminders', (req, res) => {
  console.log('id to delete: ', req.body);
  toggleCompleted(req.body, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(result);
    }
  })
})


app.listen(PORT, ()=> console.log(`Express listening on port ${PORT}`));