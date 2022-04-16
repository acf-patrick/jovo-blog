const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const config = require("./config");

// const http = require("http");

const login = require("./routes/login");
const signup = require("./routes/signup");
const app = express();

// app.use(express.urlencoded({ extended: true }));

const server = app; // http.createServer(app);

app.use(cors({ origin: "*" }));
app.use(express.json());

const routes = {
  "/login": login,
  "/signup": signup
}

for (let key of Object.keys(routes))
  app.use(key, routes[key]);

mongoose
  .connect(config.database)
  .then((res) => {
    server.listen(config.port, () => {
      console.log("server run");
    });
  })
  .catch((err) => console.log(err));
