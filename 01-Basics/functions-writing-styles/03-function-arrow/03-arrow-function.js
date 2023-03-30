
let movies = ["Harry Potter", "Rebecca", "Inception", "Hunger Games"];

// 3rd Way [Arrow Function]

movies.forEach( (elementName, elementIndex, entireArray) => {

  console.log(elementName + ", " + elementIndex + "," + entireArray);
  
})


// 3rd Way - Variation 2 [Application only for 1 line function]

console.log("3rd Way - Variation 2");
movies.forEach( (elementName)  => 
  console.log(`Element name is ${elementName}`)
)