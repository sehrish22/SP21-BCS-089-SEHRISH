const mongoose = require("mongoose");
var productSchema = mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
});
const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
