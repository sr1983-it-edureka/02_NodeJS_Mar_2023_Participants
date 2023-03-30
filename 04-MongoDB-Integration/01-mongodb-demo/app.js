
const {Book} = require("./book-model")
const mongoose = require("mongoose");


async function createBooks(){

  const book1 = new Book({
    title: 'Book1',
    author : 'Author1',
    noOfPages : 100
  })

  const result = await book1.save();
  console.log(result);

    /*book1.save()
      .then( () => {

      })
      .catch( () => {

      })*/
}

const MONGODB_URL = "mongodb+srv://mongodb-user:password_12345@cluster0.dxlrj6w.mongodb.net/sample?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL)
  .then( () => {
    console.log(`MongoDB Connection is successful`)
  })
  .catch( (error) => {
    console.log(error);
  })


createBooks();