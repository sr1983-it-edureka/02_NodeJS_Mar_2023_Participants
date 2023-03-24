const book = {
  name : "Harry Potter",
  author : "JK Rowling"
}

const bookAsString = JSON.stringify(book);

// {"name":"Harry Potter","author":"JK Rowling"}
console.log(bookAsString);

const bookObject2 = JSON.parse(
  '{"name":"Harry Potter","author":"JK Rowling"}'
);

console.log(bookObject2.name);
console.log(bookObject2.author);

