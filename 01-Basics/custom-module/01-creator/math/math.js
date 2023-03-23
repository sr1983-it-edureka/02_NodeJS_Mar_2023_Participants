
// Functioniltiy 1 -> FUNCTION
function add(a, b){

  const c = a + b;
  return c;
}

const a = 10;
const b = 20;
const result = add(a, b);

console.log(`Result of ${a} and ${b} is ${result}`);


// Functionality 2 -> Function
function sub(a, b){

  const c = a - b;
  return c;
}


// Functionality 3 -> REFERENCE
const PI = 3.14;

let bonusPercentage;

// Functionality 4 - REFERENCE / NAME
function calculateBonusForEmployees(){

  // Lines of code
  bonusPercentage = 0.8;
}

module.exports.add = add;
module.exports.SUBTRACTION = sub;
module.exports.MATHS_PI = PI;
module.exports.ADDITION = add;
module.exports.ADDITION_2 = add;