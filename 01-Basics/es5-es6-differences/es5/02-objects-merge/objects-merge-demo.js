
var empFragement1 = {id: 1, name : 'Ujjwal'};
var empFragement2 = {projects : ["project1", "project2"]};
var empFragement3 = {designation : "Manager", salary : 12345};

var empObj = Object.assign(empFragement1, empFragement2, empFragement3);
console.log(empObj);