
const productId = 123;
const productName = "Television";
const orderDate = new Date("15-Jan-2023");

const product = {
  productId,  productName, orderDate
}

console.log("Product Info " + JSON.stringify(product));