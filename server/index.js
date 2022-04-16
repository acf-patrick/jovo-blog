const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
require('dotenv').config({ path: './config.env' });

const app = express();
// app.use(express.urlencoded({ extended: true }));

// const http = require("http");
const server = app; // http.createServer(app);

const port = process.env.PORT;

// load middlewares
app.use(cors());
app.use(express.json());

// setup routes
app.use(require('./routes/@record'));

mongoose
  .connect(process.env.DB)
  .then((res) => {
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
