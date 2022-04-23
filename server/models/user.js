const { default: mongoose } = require("mongoose");
const { blogSchema } = require("../models/blog");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator: async (value) => {
        const { users } = mongoose.connection.collections;
        const result = await users.findOne({ name: value });
        if (result) return false;
        return true;
      },
      message: "{VALUE} already used",
    },
  },
  email: {
    type: String,
    validate: {
      validator: async (value) => {
        const { users } = mongoose.connection.collections;
        const result = await users.findOne({ email: value });
        if (result) return false;
        return true;
      },
      message: "{VALUE} already used",
    },
  },
  password: String,
  blogs: Array
});

const User = mongoose.model("user", userSchema);

module.exports = User;
