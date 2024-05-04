const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //Simple html file response
  /*
  res.setHeader("Content-Type", "text/html");
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
  */
  const randomnum = _.random(0, 1000);
  console.log(randomnum);
  //Routing URL GET requests
  res.setHeader("Content-Type", "text/html");
  let path = "./views/";
  switch (req.url) {
    case "/index.html":
      path += "index";
      res.statusCode = 200;
      break;
    case "/":
      path += "index";
      res.statusCode = 301;
      res.setHeader("Location", "./index.html");
      break;
    case "/about.html":
      path += "about";
      res.statusCode = 200;
      break;
    case "/blog.html":
      path += "blog";
      res.statusCode = 200;
      break;
    default:
      path += "404";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.end();
    }
  });
});

// Simple text response
//res.setHeader("Content-Type", "text/plain");
//res.write("Hello World!");
//res.end();

server.listen(3001, "localhost", () => {
  console.log("server is listening");
});
