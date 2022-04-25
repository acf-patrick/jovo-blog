const express = require("express");
const encrypt = require("../encrypt");
const User = require("../models/user");

User.create({});

let router = express.Router();

router.post("/", (req, res) => {
  const user = req.body;
  let response = {
    username: false,
    password: false,
  };
  User.findOne({ name: user.name }).then((result) => {
    if (result) 
      response = {        
        ...response,
        username: true,
        password: result.password === encrypt(user.password),
        id: result._id,
        email: result.email,
        profilePicture: result.profilePicture,
      };
    // console.log(result);
    res.json(response);
  });
});

module.exports = router;
