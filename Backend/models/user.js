const mongoose = require("mongoose");

// MongoDB schema for user
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  role: String,
  password: String,
});

// MongoDB model for user
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
