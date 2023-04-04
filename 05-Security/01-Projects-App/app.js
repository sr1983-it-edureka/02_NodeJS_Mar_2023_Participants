const {authenticationRouter} = 
 require("./features/authentication/user-router");

const {demoCookiesRouter} = require("./features/demo-cookies/router");
const {projectRouter} = require("./features/projects/router");


require("dotenv").config();

const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(cookieParser())

app.use(authenticationRouter);
app.use(demoCookiesRouter);
app.use(projectRouter);

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL)
  .then( () => {
    console.log(`MongoDB Connection is successful`)
  })
  .catch( (error) => {
    console.log(error);
  })


const PORT = 9999;
app.listen(PORT, () => {

  console.log(`Server started and running at port ${PORT}`);
})