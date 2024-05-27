var newexpress = require("express");
let newrouter = newexpress.Router();
var newproductModel = require("../../models/newproduct");
newrouter.get("/", async (req, res) => {
  let newproducts = await newproductModel.find();
  return res.send(newproducts);
});
module.exports = newrouter;
