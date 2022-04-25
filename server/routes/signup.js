const express = require("express");
const bcrypt = require("bcrypt");
const encrypt = require("../encrypt");
const User = require("../models/user");

const router = express.Router();

router.post("/", (req, res) => {
  const user = req.body;

  new User({
    name: user.name,
    email: user.email,
    password: encrypt(user.password),
    profilePicture: "octocat.svg"
  })
    .save()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
