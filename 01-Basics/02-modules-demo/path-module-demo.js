
// const pathModuleRef = require("path");

const path = require("path");

const pathObj = path.parse("C:\\Softwares\\NodeJS\\node.exe");

console.log(pathObj);

const extension = pathObj.ext;
console.log(`File extension is ${extension}`);