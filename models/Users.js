const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phNumber: Number,
  dob: String,
  password: String,
});

module.exports = mongoose.model("users", userSchema);
