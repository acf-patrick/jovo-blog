const express = require("express");
const encrypt = require("../encrypt");
const { User, getUser } = require("../models/user");

User.create({});

let router = express.Router();

router.post("/", (req, res) => {
  const user = req.body;
  let response = {
    username: false,
    password: false,
  };
  getUser({ name: user.name }).then((result) => {
    if (result) {
      response.username = true;
      response.password = result.password === encrypt(user.password);
      response.user = result;
    }
    res.json(response);
  });
});

module.exports = router;
