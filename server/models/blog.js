const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: String,
});

module.exports = {
  Blog: mongoose.model("blog", blogSchema),
  blogSchema: blogSchema,
};
