
const fs = require("../sample-modules/04-fs");

console.log(fs.pathSeparator);

const contents = fs.readFile('hello.txt');
console.log(contents);

fs.writeFile('hello.txt', 'hello world');