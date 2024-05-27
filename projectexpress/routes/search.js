var express = require("express");
var productModel = require("../models/product");
var router = express.Router();

app.post("/search", async (req, res) => {
  const query = req.body.query;
  const page = parseInt(req.query.page) || 1; // get the page number from the parsed search query 
  const limit = 10; 

  try {
    const results = await Product.find({ name: query })
      .skip((page - 1) * limit)
      .limit(limit);
    const totalResults = await Product.countDocuments({
      name: query,
    });
    const totalPages = Math.ceil(totalResults / limit);

    // First of all i will initialize the new array for the
    // users who are first time searcing for something
    // in case if they have any previous history
    // it will return that and rendered in the View -> search.pug

    if (!req.session.searchHistory) {
      req.session.searchHistory = [];
    }
    req.session.searchHistory.push({ query, searchedAt: new Date() });

    res.render("search", {
      results: results.length ? results : "No results found",
      searchHistory: req.session.searchHistory,
      currentPage: page,
      totalPages: totalPages,
      query: query,
    });
  } catch (err) {
    res.status(500).send("Error occurred: database error");
  }
});
