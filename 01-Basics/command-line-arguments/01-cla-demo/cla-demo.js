const claArguments = process.argv;

console.log(claArguments);

console.log(`Length is ${claArguments.length}`);

for (let index = 2; index < claArguments.length; index ++){

  const argValue = claArguments[index];
  console.log(`Argument at index ${index} is ${argValue}`);
}
