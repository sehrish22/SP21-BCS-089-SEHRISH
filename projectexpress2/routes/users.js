var express = require("express");
var router = express.Router();
var userModel = require("../models/user");

/* GET users listing. */
router.get("/register", function (req, res, next) {
  res.render("users/register");
});
router.get("/login", function (req, res, next) {
  res.render("users/login");
});
router.get("/logout", function (req, res, next) {
  req.session.user=null;
  res.redirect("/login");
});
router.post("/login", async function (req, res, next) {
  let user = await userModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  // return res.send(user);
  if (!user) return res.redirect("/login");
  req.session.user=user;
  return res.redirect("/");
});
router.post("/register", async function (req, res, next) {
  let user = new userModel(req.body);
  await user.save();
  res.redirect("/");
});
module.exports = router;
