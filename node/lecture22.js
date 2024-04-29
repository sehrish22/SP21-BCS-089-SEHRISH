const http = require("http");
http
  .createServer(function (req, res) {
    switch (req.url) {
      case "/":
        res.write("<h1>hello</h1>");
        break;
      case "/hobbies":
        res.write("<h1>my hobbies are eating sleeping</h1>");
        break;
      default:
        res.write("<h1>page not found</h1>");
        break;
    }
    res.end();
  })
  .listen(8080, () => {
    console.log("Server Started at localhost:8080");
  });
