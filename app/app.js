const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Configurações do app
app = express();
app.use(bodyParser.json());

const opts = {
  useNewUrlParser: true,
  auth: {
    user: 'admin',
    pass: 'admin1230'
  }
};

// Confirações do database
mongoose.connect('mongodb://@ds145304.mlab.com:45304/blog', opts);
db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));

module.exports = app;
