
const fs = require("fs");

const path = "C:\\Softwares\\NodeJS";


// 1st way
// fs.readdir(path, handleDirectoryRead);

function handleDirectoryRead(error, files){

  if (error){
    console.log("Error during directory.read");
    console.log(error);
    return;
  }else{
    console.log("Length is " + files.length);
    console.log(files);
  }
}

//2nd way

const fRef = function processDirectoryRead(error, files){

  if (error){
    console.log("Error during directory.read");
    console.log(error);
    return;
  }else{
    console.log("Length is " + files.length);
    console.log(files);
  }
}
// fs.readdir(path, fRef)

// 3rd way

/*
fs.readdir(path, function(error, files) {

  console.log("3rd way");
  if (error){
    console.log("Error during directory.read");
    console.log(error);
    return;
  }else{
    console.log("Length is " + files.length);
    console.log(files);
  }

})*/


// 4th way

fs.readdir(path, (error, files) => {

  console.log("4th way");
  if (error){
    console.log("Error during directory.read");
    console.log(error);
    return;
  }else{
    console.log("Length is " + files.length);
    console.log(files);
  }  
})