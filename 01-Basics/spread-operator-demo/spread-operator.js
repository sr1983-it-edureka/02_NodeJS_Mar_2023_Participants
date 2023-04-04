
const numbers = [1, 3, 5];

console.log(numbers);

// numbers.push(7);numbers.push(9);numbers.push(11);
// console.log(numbers);

//[2, 4, 6, 1, 3, 5, 7, 9, 11];
// const numbers2 = [2, 4, 6, ...numbers];
// console.log(numbers2);

const numbers3 = [2, ...numbers, 3, ...numbers, 4, ...numbers];
console.log(numbers3);

const numbersFinal = [...numbers, ...numbers3];
console.log(numbersFinal);

const colors = ["RED", "YELLOW"];

const newColors = [...colors, "ORANGE"];
