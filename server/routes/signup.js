const express = require("express");
const bcrypt = require("bcrypt");
const encrypt = require("../encrypt");
const { User } = require("../models/user");

const router = express.Router();

router.post("/", (req, res) => {
  const user = req.body;

  User.create({
    name: user.name,
    email: user.email,
    password: encrypt(user.password),
    profilePicture: "image/profile/octocat.svg",
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      const [name, email] = [err.errors.name, err.errors.email];
      res.send({
        name: name ? name.message : "",
        email: email ? email.message : "",
      });
    });
});

module.exports = router;
