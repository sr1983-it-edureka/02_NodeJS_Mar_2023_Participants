
const empFragement1 = {id: 1, name : 'Ujjwal'};
const empFragement2 = {projects : ["project1", "project2"]};
const empFragement3 = {designation : "Manager", salary : 12345};

let empObj = {
    ...empFragement1, rating: 'Good', ...empFragement2, ...empFragement3 
}; 
console.log(empObj);