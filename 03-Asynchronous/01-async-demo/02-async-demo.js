
console.log("Line 1...");

const THREE_MILLISECONDS = 3 * 1000;
setTimeout( () => {

  console.log("Within setTimeout");
}, THREE_MILLISECONDS);

console.log("Line 2...");


// setTimeout (() => { wish-message}, "01-Apr-2023");