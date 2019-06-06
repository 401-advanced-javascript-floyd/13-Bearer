'use strict';

require('dotenv').config();

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
};

console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, options);

// Start the web server
require('./src/app.js').start(process.env.PORT);
