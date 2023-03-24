
const a = 10;

const chromeObject = {

  name : "Google Chrome Browser",
  version: "50.1"
};

const output = JSON.stringify(chromeObject);

console.log(`Chrome object is ${output}`);

const myLaptop = {
  manufacturerName : "Lenovo",
  modelName : "Latitude Series",
  color: "Black"
}

const myMobile = {
  manufacturerName : "Samsung",
  model : "Galaxy",
  color: "Gold"
}

const myTable = {
  color: "Blue",
  laptop: myLaptop,
  mobile : myMobile,

  laptop2 : {
    manufacturerName1 : "Dell",
    color : "Greyish Black"
  }
}

console.log(`My Table Object is ${JSON.stringify(myTable)}`);

const myFavColors = ["Red", "Blue", "Orange"];

const chapter3 = {
  chapterNo: 3, noOfPages : 19
}

const chapter4 = {
  chapterNo : 4, noOfPages: 28
}

const myNodeJSBook = {

  name: "Introduction to NodeJS",
  noOfPagesForAllChapters : [25, 30, 19, 28, 30],
  chapters : [
    {chapterNo : 1, noOfPages: 25},
    {chapterNo : 2, noOfPages: 30},
    chapter3,
    chapter4,
    {chapterNo : 5, noOfPages: 30}
  ] 
}

console.log(`Book is ${JSON.stringify(myNodeJSBook)}`);