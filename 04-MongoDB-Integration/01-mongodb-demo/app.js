
const {Book} = require("./book-model")
const mongoose = require("mongoose");


async function createBooks(){

  for (let index = 1; index <= 5; index ++){

    const newBook = new Book({
      title: 'Book' + index,
      author : 'Author' + index,
      noOfPages : (100 * index)
    })
  
    const result = await newBook.save();
    console.log(result);  
  }

}

function listAllBooks(){

  Book.find()
    .then( (results) => {
      console.log(results);
    })
    .catch( (error) => {
      console.log(error);
    })
}

async function listAllBooksV2(){

  const books = await Book.find();
  console.log(books);

  const title = books[0].title;
  console.log(title);
}

async function listAllBooksBasedOnFilter(){

  const books = await Book.find({
    author: 'Author3'
  })

  console.log(books);
}

async function findBookAndUpdate(id){

  const bookDocument = await Book.findById(id);

  // Update properties
  bookDocument.set({
    title : bookDocument.title + '-Updated',
    author : bookDocument.author + '-Updated'
  })

  const result = await bookDocument.save();
  console.log(result);
}


async function findBookAndUpdateV2(id){

  const result = await Book.updateOne(
    {_id: id},
    {
      $set : {
        title : 'Title 3 - Again',
        author : 'Author 3 - Again',
        noOfChapters : 12,
        genres : ["Action", "Thriller", "Sci-Fic"]
      }
    }, 
    {
      strict: false
    }
  )

  console.log(result);
}

async function deleteBookBasedOnId(id){

  const result = await Book.deleteOne({
    _id: id
  });

  console.log(result);
}


async function deleteBooks(){

  const result = await Book.deleteMany({
    author: 'Author3'
  });

  console.log(result);
}


async function deleteAllBooks(){

  const result = await Book.deleteMany({
  });

  console.log(result);
}

const MONGODB_URL = "mongodb+srv://mongodb-user:password_12345@cluster0.dxlrj6w.mongodb.net/sample?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL)
  .then( () => {
    console.log(`MongoDB Connection is successful`)
  })
  .catch( (error) => {
    console.log(error);
  })



// listAllBooks();

// listAllBooksV2();

// listAllBooksBasedOnFilter();

// findBookAndUpdate("6425342d4ddb6c8f180615c4");

findBookAndUpdateV2("642bc9262216b057d660ae91");

// deleteBookBasedOnId("642664a840ca7c9cf8076c54");

// deleteBooks();

// deleteAllBooks();
// createBooks();
