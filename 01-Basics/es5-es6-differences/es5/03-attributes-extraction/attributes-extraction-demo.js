var myTable = {
  color: "Blue",
  mobile : {
    name : "iPhone"
  },

  laptop2 : {
    manufacturerName1 : "Dell",
    color : "Greyish Black"
  }
}

var mobile = myTable.mobile;
var laptop2Color = myTable.laptop2.color;

console.log("Mobile is " + JSON.stringify(mobile));
console.log("Color is " + laptop2Color);