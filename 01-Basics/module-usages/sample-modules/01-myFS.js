
class MyFileSystem {

  constructor(os){
    this.os = os;
  }

  readFile(filename){
    console.log(`Simulated Read File operation -> ${filename}`);

    return 'my sample content';
  }
}

/*
let myWindowsFS = new MyFileSystem('windows');
const contents = myWindowsFS.readFile('test.txt');
console.log(`File contents ${contents}`);*/

// a = b
module.exports = MyFileSystem;
