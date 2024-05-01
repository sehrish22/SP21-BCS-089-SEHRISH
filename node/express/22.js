const express = require("express");
const app = express();
app.use(express.json());
const products = ["foundation", "brushes", "lipsticks", "mascara", "face wash"];

app.get("/", function (req, res) {
  res.send("hello world");
});
//to get all
app.get("/api/products", function (req, res) {
  res.send(products);
});
//to get any one specified
app.get("/api/products/1", function (req, res) {
  res.send(products[1]);
});

//to get any one product not specified
app.get("/api/products/:index", function (req, res) {
  if (!products[req.params.index]) {
    return res.status(400).send("product not found");
  }
  res.send(products[req.params.index]);
});

//to update product
app.put("/api/products/:index", function (req, res) {
  products[req.params.index] = req.body.name;
  res.send(products[req.params.index]);
});

//to delete
app.delete("/api/products/:index", function (req, res) {
  products.splice(req.params.index, 1);
  res.send(products);
});

//to add a new product
app.post("/api/products", function (req, res) {
  products.push(req.body.name);
  res.send(products);
});

app.listen(3000);
