const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const open = require('open');
const bodyParser = require('body-parser');
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV !== 'development') {
  require('dotenv').load();
}

const app = express();
app.use(cors());

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./routes')(app);


module.exports = app;

