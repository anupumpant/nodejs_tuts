const express = require("express");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("app is listening");
});

app.get("/", (req, res) => {
  //res.sendFile("./views/index.html", { root: __dirname });
  const randomnum = _.random(0, 100);
  res.render("index", { data: randomnum });
});

app.get("/blog", (req, res) => {
  //res.sendFile("./views/blog.html", { root: __dirname });
  res.render("blog");
});

app.get("/about", (req, res) => {
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about");
});

app.get("/index", (req, res) => {
  res.redirect("/");
});

app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404");
});
