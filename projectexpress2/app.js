var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session = require("express-session");
var config = require("config");
var MongoStore = require("connect-mongo");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/loginform");
var productsRouter = require("./routes/products");
var haircareRouter = require("./routes/haircare");
var mistRouter = require("./routes/mist");
var sessionAuth = require("./middlewares/sessionAuth");
var newproductsRouter = require("./routes/api/newproducts");
var newusersRouter = require("./routes/api/newusers");

var app = express();

// Database connection
mongoose
  .connect(config.get("db"), { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((error) => {
    console.log("Connection failed", error);
  });

// Create a MongoStore instance
var store = MongoStore.create({
  mongoUrl: config.get("db"),
  collectionName: "sessions", // specify the collection name for storing sessions
  ttl: 60 * 60 * 24 // session expiration time in seconds (optional)
});

// Session setup
app.use(
  session({
    secret: "dummytext",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
    store: store // Pass the store instance here
  })
);

// Middleware setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(sessionAuth); // This is where sessionAuth middleware is used

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Routes setup
app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/api/newusers", newusersRouter);
app.use("/loginform", loginRouter);
app.use("/products", productsRouter);
app.use("/api/newproducts", newproductsRouter);
app.use("/haircare", haircareRouter);
app.use("/mist", mistRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;