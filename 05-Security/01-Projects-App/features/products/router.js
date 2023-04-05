

const express = require("express");
const { getAllProducts } = require("./controller");

const productRouter = express.Router();

productRouter.get("/projects/products/list", 
getAllProducts);

module.exports = {productRouter};