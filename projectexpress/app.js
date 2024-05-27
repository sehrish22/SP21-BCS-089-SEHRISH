var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/loginform");
var productsRouter = require("./routes/products");
var haircareRouter = require("./routes/haircare");
var mistRouter = require("./routes/mist");
var session = require("express-session");
var sessionAuth=require("./middlewares/sessionAuth");
var newproductsRouter=require("./routes/api/newproducts");
var newusersRouter=require("./routes/api/newusers");
var config = require("config"); 

var app = express();
app.use(
  session({
    secret: "dummytext",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(sessionAuth);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/api/newusers", newusersRouter);
app.use("/loginform", loginRouter);
app.use("/products", productsRouter);
app.use("/api/newproducts", newproductsRouter);
app.use("/haircare", haircareRouter);
app.use("/mist", mistRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

mongoose
  .connect(config.get("db"))
  .then(() => {
    console.log("connection successfull");
  })
  .catch((error) => {
    console.log("conncetion failed");
  });

module.exports = app;
