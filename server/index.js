const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const http = require("http");
const server = http.createServer(app);

const port = process.env.PORT;

// load middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/image", express.static("image"));

// setup routes
app.use(require("./routes/@record"));

mongoose
  .connect(process.env.DB)
  .then((res) => {
    console.log("Successfully connected to database.");
  })
  .catch((err) => console.log(err));

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
