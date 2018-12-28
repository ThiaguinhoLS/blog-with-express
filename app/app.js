const express = require('express');
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());
module.exports = app;
