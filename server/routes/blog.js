const express = require("express");
const { User } = require("../models/user");
const router = express.Router();
const Blog = require("../models/blog");

router
  .route("/")
  .post((req, res) => {
    const blog = new Blog(req.body);
    blog
      .save()
      .then((doc) =>
        User.updateOne({ name: blog.author }, { $push: { blogIDs: doc._id } })
      )
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
  })
  .get((req, res) => {
    res.send(req.body);
  });

module.exports = router;
