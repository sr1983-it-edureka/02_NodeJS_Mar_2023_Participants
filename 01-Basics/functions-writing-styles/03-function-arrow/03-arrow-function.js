let movies = ["Harry Potter", "Rebecca", "Inception", "Hunger Games"];

// 3rd Way [Arrow Function]

movies.forEach( (elementName, elementIndex, entireArray) => {

  console.log(elementName + ", " + elementIndex + "," + entireArray);
  
})