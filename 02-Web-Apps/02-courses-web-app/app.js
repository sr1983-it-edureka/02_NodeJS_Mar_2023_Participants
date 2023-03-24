
const express = require("express");

const app = express();

const allCourses = [
  {id: 1, name: 'Java FSD'},
  {id: 2, name : 'Mastering NodeJS'},
  {id: 3, name: 'AWS Certification Course'}
]

app.get("/courses", (req, res) => {

  res.send(allCourses);

})

const PORT = 9999;
app.listen(PORT, () => {

  console.log(`Server started and running at port ${PORT}`);
})