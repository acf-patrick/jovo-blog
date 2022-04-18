const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();

const Blog = require("../models/blog");

router
  .route("/")
  .post((req, res) => {})
  .get((req, res) => {
    res.send(req.body);
  });

module.exports = router;
