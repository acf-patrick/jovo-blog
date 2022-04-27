const { default: mongoose } = require("mongoose");

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
  profilePicture: String,
  coverPicture: String,
  password: String,
  quote: String,
  blogIDs: [String],
});

// userSchema.set('validateBeforeSave', false);
const User = mongoose.model("user", userSchema);

/**
 * Query user using its name or ID.
 * ID will take priority to the name parameter
 */
const getUser = async ({ name, id }) => {
  let result;

  if (name) result = await User.findOne({ name: name });
  else if (id) result = await User.findById(id);
  if (result) {
    const ret = {
      id: result._id,
      ...result._doc,
    };
    delete ret.__v;
    delete ret._id;
    // delete ret.password;
    return ret;
  }
  return null;
};

module.exports = { User, getUser };
