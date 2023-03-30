
// import java.util.Array

const MyFileSystem = require("../sample-modules/01-myFS");
console.log(MyFileSystem);

const unixFileSystem = new MyFileSystem('unix');
const contents = unixFileSystem.readFile('test.txt');

console.log('Contents -> ' + contents);