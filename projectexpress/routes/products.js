var express = require("express");
var router = express.Router();
var productModel = require("../models/product");

/* GET home page. */
//to show the database
router.get("/", async function (req, res, next) {
  let products = await productModel.find();
  res.render("products/list", { title: "makeup by bba", products: products });
});
//to fetch the add new prodduct page
router.get("/add", async function (req, res, next) {
  res.render("products/add");
});
//to add new product in database
router.post("/add", async function (req, res, next) {
  let product = new productModel(req.body);
  await product.save();
  res.redirect("/products");
});
//to delete a product
router.get("/delete/:id", async function (req, res, next) {
  let product = await productModel.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});
//to fetch the edit page
router.get("/edit/:id", async function (req, res, next) {
  let product = await productModel.findById(req.params.id);
  res.render("products/edit", { product });
});
//to edit the product
router.post("/edit/:id", async function (req, res, next) {
  let product = await productModel.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  product.desc = req.body.desc;
  await product.save();
  res.render("/products");
});
module.exports = router;
