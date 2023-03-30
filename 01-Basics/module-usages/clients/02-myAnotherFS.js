
// import java.util.Array

const moduleRef = require("../sample-modules/02-myAnotherFS");
console.log(moduleRef);

const MyAnotherFileSystem = moduleRef.MyAnotherFileSystem;

const unixFileSystem = new MyAnotherFileSystem('unix');
const contents = unixFileSystem.readFile('test.txt');

console.log('Contents -> ' + contents);