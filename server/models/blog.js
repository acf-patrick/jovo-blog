const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  star: { type: Number, default: 0 },
  tags: [String],
});

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
