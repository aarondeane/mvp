const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp');

const db = mongoose.connection;

db.on('error', () => { console.log('connection error:') } );
db.once('open', () => { console.log('Connected to MongoDB') } );

module.exports = db;