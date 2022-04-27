const express = require("express");
const { User } = require("../models/user");
const router = express.Router();
const Blog = require("../models/blog");

router
  .route("/")
  .get((req, res) => {
    const title = req.query.title;
    Blog.find({ title: title })
      .then((doc) => res.json(doc))
      .catch((err) => res.json(err));
  })
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
  });

router
  .route("/:id")
  .get((req, res) => {
    Blog.findById(req.params.id).then((blog) => {
      if (blog) res.json(blog);
      else res.sendStatus(404);
    });
  })
  .put((req, res) => {});

module.exports = router;
