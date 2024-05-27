var newmongoose = require("mongoose");
var newproductSchema = newmongoose.Schema({
  name: String,
  price: Number,
  desc: String,
});
var newproductModel = newmongoose.model("NewProduct", newproductSchema);
module.exports = newproductModel;