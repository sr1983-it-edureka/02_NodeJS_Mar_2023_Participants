
const allCourses = [
  {id: 1, name: 'Java FSD'},
  {id: 2, name : 'Mastering NodeJS'},
  {id: 3, name: 'AWS Certification Course'}
]

//

const searchElementId = 999;

function searchByCourseId (item){

  if (item.id === searchElementId){
    return item;
  }
  return null;
}

const courseResult = allCourses.find(searchByCourseId);
console.log(`Details for the course id ${searchElementId} is ${JSON.stringify(courseResult)}`);

if (courseResult){

  // Do processing...
}


// 2nd Variation
const courseResult2 = allCourses.find( (item) => {

  if (item.id === searchElementId){
    return item;
  }
  return null;

})

console.log(`[2nd Variation] Details for the course id ${searchElementId} is ${JSON.stringify(courseResult2)}`);


// 3rd Variation
const courseResult3 = allCourses.find( (item) => {

  return (item.id === searchElementId);

})

console.log(`[3rd Variation] Details for the course id ${searchElementId} is ${JSON.stringify(courseResult3)}`);


// 4th Variation
const courseResult4 = allCourses.find( (item) => 
  item.id === searchElementId
)

console.log(`[4th Variation] Details for the course id ${searchElementId} is ${JSON.stringify(courseResult4)}`);

