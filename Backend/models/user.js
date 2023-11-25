const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  role: String,
  password: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
