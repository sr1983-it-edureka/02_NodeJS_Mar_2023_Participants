
var productId = 123;
var productName = "Television";
var orderDate = new Date("15-Jan-2023");

var product = {
  productId : productId,
  productName : productName,
  orderDate : orderDate
}

console.log("Product Info " + JSON.stringify(product));