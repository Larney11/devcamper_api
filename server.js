const express = require("express");
require("dotenv").config({ path: "./config/config.env" });

// Load env vars
const app = express();

const PORT = process.env.PORT || 7777;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
