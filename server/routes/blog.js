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
      .then(() => User.findOne({ name: blog.author }))
      .then((user) => {
        user.blogIDs.push(blog._id.valueOf());
        return user.save();
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.send(err.message);
      });
  })
  .get((req, res) => {
    res.send(req.body);
  });

module.exports = router;
