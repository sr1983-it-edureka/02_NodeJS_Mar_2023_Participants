
let movies = ["Harry Potter", "Rebecca", "Inception", "Hunger Games"];

// 1st way - Iteration

for (let index = 0; index < movies.length; index ++){

  const movieName = movies[index];
  console.log(`Movie name at  index ${index} is ${movieName}`);
  
}

// 2nd way - Iteration
movies.forEach(printMovieName);

function printMovieName(elementName, elementIndex, entireArray){

  console.log(elementName + ", " + elementIndex + "," + entireArray);
}

// Calling the fucntion
// printMovieName();

// 2nd Way - Anonym / Inline Function
movies.forEach(function(elementName, elementIndex, entireArray){

  console.log(elementName + ", " + elementIndex + "," + entireArray);

});
