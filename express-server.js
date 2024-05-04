const express = require("express");
const _ = require("lodash");
const mongoose = require("mongoose");
require("dotenv").config();
const Blog = require("./models/blog.js");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

mongoose
  .connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to db");

    app.listen(process.env.PORT, () => {
      console.log("app is listening");
    });
  })
  .catch((err) => {
    console.log(err);
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

app.get("/create-blog", (req, res) => {
  const blog = new Blog({
    title: "This is the blog headline",
    snippet: "This is the snippet",
    body: "The body of the blog is shown here",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("6636976d229705dbbcfbfd4a")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404");
});
