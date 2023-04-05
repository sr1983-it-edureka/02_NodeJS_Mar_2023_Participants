const myTable = {
  color: "Blue",
  mobile : {
    name : "iPhone"
  },

  laptop2 : {
    manufacturerName1 : "Dell",
    color : "Greyish Black"
  }
}

const {color, laptop2} = myTable;

console.log("Color is " + laptop2Color);
console.log("Laptop is " + JSON.stringify(laptop2));
