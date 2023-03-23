
const numbers = [1, 5, 10, 15, 35];

// Index Range [0, 4]

const firstElement = numbers[0];
const lastElement = numbers[4];

console.log(`First element is ${firstElement} and last element is ${lastElement}`);

console.log(`Length of the array is ${numbers.length}`);

for (let index = 0; index < numbers.length; index ++){

  const elementValue = numbers[index];
  console.log(`Element present at index ${index} is ${elementValue}`);
  
}