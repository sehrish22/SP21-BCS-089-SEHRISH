const mongoose= require("mongoose");
//creating schema
 const productSchema= mongoose.Schema({
    title:String,
    price:number,
    tags:[String]
 })
  const productmodel = mongoose.model("product",productSchema);

  module.exports = productmodel;