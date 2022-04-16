const { default: mongoose } = require("mongoose");

const Blog = mongoose.model("blog", {
    title: String,
    body: String,
    author: String,
    
});