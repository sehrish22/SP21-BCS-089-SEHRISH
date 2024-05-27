var express = require("express");
var router = express.Router();
var productModel = require("../models/product");
var checksessionAuth=require("../middlewares/checksessionAuth");

/* GET home page. */
//to show the database
router.get("/", async function (req, res, next) {
  let products = await productModel.find();
  console.log(req.session.user);
  res.render("products/list", { title: "makeup by bba", products: products });
});
//to fetch the add new prodduct page
router.get("/add",checksessionAuth, async function (req, res, next) {
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
  res.redirect("/products");
});
//adding product to cart
router.get("/cart/:id", async function (req, res, next) {
  let product = await productModel.findById(req.params.id);
  console.log("Add this product to my cart");
  let cart = [];
  if (req.cookies.cart) cart = req.cookies.cart;
  cart.push(product);
  res.cookie("cart", cart);
  res.redirect("/products");
});
//deleting product from cart
router.get("/cart/remove/:id", async function (req, res, next) {
  let cart = [];
  if (req.cookies.cart) cart = req.cookies.cart;
  cart.splice(
    cart.findIndex((c) => c._id == req.params.id),
    1
  );
  res.cookie("cart", cart);
  res.redirect("/cart");
});
module.exports = router;
