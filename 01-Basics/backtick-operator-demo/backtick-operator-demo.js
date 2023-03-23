
// Person - compund data
/*
{
  firstname
  lastname
  age
  address
    streeName
    areaName
    city
    pincode
  noOfODIMatches
}
*/



let firstName = "Sachin";
let lastName = 'Tendulkar';
let age = 45;
let address = 'Mumbai';
let representingCounty = "India";

console.log("First Name " + firstName + ", Last  Name " + lastName
+ ", Age -> " + age + ", Address -> " + address + ", Representing Country -> " + representingCounty);

// Backtick Operator
// [] 1 2 3 4 5
// ~
// ` NOT [Single Quote ' ]

const message = `First Name is ${firstName}, Last Name is ${lastName}, Age is ${age}, Address is ${address} and Representing Country is ${representingCounty}`;

console.log(message);

// message = "New Content " + message;