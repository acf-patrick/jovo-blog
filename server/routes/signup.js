const express = require("express");
const mongoose = require("mongoose");

const signup = express.Router();

signup.post("/", (req, res, next) => {
  console.log("hey hey");
  next();
});

module.exports = signup;
