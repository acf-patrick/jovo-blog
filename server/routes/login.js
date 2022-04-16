const express = require("express");
const encrypt = require("../encrypt");
const { User } = require("../models/user");

let login = express.Router();

login.post("/", (req, res) => {
  const user = req.body;
  let response = {
    username: false,
    password: false,
  };
  User.findOne({ name: user.name }).then((result) => {
    if (result !== null) {
      response.username = true;
      response.password = result.password === encrypt(user.password);
    }
    res.json(response);
  });
});

module.exports = login;
