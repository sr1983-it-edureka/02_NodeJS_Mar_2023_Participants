
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/hello", (req, res) => {

  res.send("Sending plain text content");
});

app.get("/ejs", (req, res) => {

  const demoData = {
    title : "Demonstration of EJS",
    favMovies : [
      "Inception", "Avatar", "Dial M for Murder"
    ]
  }

  res.render("demo", demoData);
});

app.get("/ejs2", (req, res) => {

  res.render("ejs-page-include-demo");
})

const PORT = 9999;

app.listen(PORT, () => {
  console.log(`Server started and running at port ${PORT}`);
})