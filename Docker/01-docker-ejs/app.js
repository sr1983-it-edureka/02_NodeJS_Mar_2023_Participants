
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/hello", (req, res) => {

  res.send("Sending plain text content");
});

const PORT = 9999;

app.get("/ejs", (req, res) => {

  const demoData = {
    title : "Demonstration of EJS",
    favMovies : [
      "Inception", "Avatar", "Dial M for Murder"
    ],
    PORT
  }

  res.render("demo", demoData);
});

app.get("/ejs2", (req, res) => {

  res.render("ejs-page-include-demo");
})


app.listen(PORT, () => {
  console.log(`Server started and running at port ${PORT}`);
})