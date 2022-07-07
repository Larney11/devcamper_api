const express = require('express');
require('dotenv').config({ path: './config/config.env' });
// const logger = require('./middleware/logger');
const morgan = require('morgan');

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// app.use(logger);

//  Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 7777;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
