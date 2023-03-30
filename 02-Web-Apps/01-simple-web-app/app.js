
const express = require("express");
const app = express();

function defaultFunctionality(req, res){

  res.send("Default functionality..")
}
app.get("/", defaultFunctionality);

function addFunctionality(req, res){
  res.send("Add Functionality...")
}

app.get("/add", addFunctionality);

function subFunctionality(req, res){
  res.send("Sub Functionality");
}
app.get("/sub", subFunctionality);

function listenHandler(){
  console.log("Server started....")
}

const PORT = process.env.PORT;
app.listen(PORT, listenHandler);