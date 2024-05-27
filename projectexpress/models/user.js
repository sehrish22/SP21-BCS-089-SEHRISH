const mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
