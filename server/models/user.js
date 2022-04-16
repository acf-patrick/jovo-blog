const { default: mongoose } = require("mongoose");

const User = mongoose.model("user", {
  name: String,
  password: String,
  email: String,
  id: Number,
});

module.exports = {
  User
};
