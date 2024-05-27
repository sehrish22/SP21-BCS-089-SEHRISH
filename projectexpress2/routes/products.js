var express = require("express");
var router = express.Router();
var productModel = require("../models/product");
var checksessionAuth = require("../middlewares/checksessionAuth");

/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await productModel.find();
  console.log(req.session.user);
  res.render("products/list", { title: "makeup by bba", products: products, searchHistory: req.session.searchHistory || [] });
});

// Fetch add new product page
router.get("/add", checksessionAuth, async function (req, res, next) {
  res.render("products/add");
});

// Add new product to database
router.post("/add", async function (req, res, next) {
  let product = new productModel(req.body);
  await product.save();
  res.redirect("/products");
});

// Delete a product
router.get("/delete/:id", async function (req, res, next) {
  let product = await productModel.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

// Fetch edit page
router.get("/edit/:id", async function (req, res, next) {
  let product = await productModel.findById(req.params.id);
  res.render("products/edit", { product });
});

// Edit a product
router.post("/edit/:id", async function (req, res, next) {
  let product = await productModel.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  product.desc = req.body.desc;
  await product.save();
  res.redirect("/products");
});

// Add product to cart
router.get("/cart/:id", async function (req, res, next) {
  let product = await productModel.findById(req.params.id);
  console.log("Add this product to my cart");
  let cart = [];
  if (req.cookies.cart) cart = req.cookies.cart;
  cart.push(product);
  res.cookie("cart", cart);
  res.redirect("/products");
});

// Delete product from cart
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

// Search products
router.get("/search", async function (req, res, next) {
  let searchQuery = req.query.query || "";
  let page = parseInt(req.query.page) || 1;
  let perPage = 10;

  let products = await productModel.find({ name: new RegExp(searchQuery, 'i') })
                                    .skip((page - 1) * perPage)
                                    .limit(perPage);

  // Save search terms in session
  if (!req.session.searchHistory) {
    req.session.searchHistory = [];
  }
  if (searchQuery && !req.session.searchHistory.includes(searchQuery)) {
    req.session.searchHistory.push(searchQuery);
  }

  // Count total documents for pagination
  let totalProducts = await productModel.countDocuments({ name: new RegExp(searchQuery, 'i') });
  let totalPages = Math.ceil(totalProducts / perPage);

  res.render("products/list", { 
    title: "Search Results", 
    products: [], // Keep the existing products list empty to avoid confusion
    searchResults: products,
    currentPage: page,
    totalPages: totalPages,
    query: searchQuery,
    searchHistory: req.session.searchHistory
  });
});

module.exports = router;