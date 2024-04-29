const http = require("http");
http
  .createServer(function (req, res) {
    console.log(req.url);
    res.write("<h1>hello</h1>");
    res.end();
  })
  .listen(8080, () => {
    console.log("Server Started at localhost:8080");
  });
