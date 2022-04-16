const express = require("express");
const mongoose = require("mongoose");

const signup = express.Router();

signup.post("/", (req, res) => {
  const data = req.body;
});

module.exports = signup;
