const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.post("/", (req, res) => {
  res.send("Sign up!");
});

module.exports = router;
