
const express = require("express");
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const allCourses = [
  {id: uuidv4(), name: 'Java FSD', cost : 12345},
  {id: uuidv4(), name : 'Mastering NodeJS', cost: 23456},
  {id: uuidv4(), name: 'AWS Certification Course', cost: 34567}
]

app.get("/courses", (req, res) => {

  res.send(allCourses);

})

app.get("/courses/:course_id", (req, res) => {

  const courseObject = getCourseObjectFromRequest(req);

  if (courseObject){
    res.send(courseObject);
  }else{
    sendErrorResponseForInvalidCourseId(
      res, req.params.course_id);
  }
})

app.post("/courses/", (req, res) => {

  const reqBody = req.body;
  console.log(`Request body without JSON.stringify is ${reqBody}`);
  console.log(`Request body with JSON.stringify  ${JSON.stringify(reqBody)}`);

  const courseName = req.body.name;
  const courseCost = req.body.cost;

  const newCourseObject = {

    id: uuidv4(),
    name : courseName,
    cost : courseCost
  }

  allCourses.push(newCourseObject);

  res.status(201).send(newCourseObject)
})


app.delete("/courses/:course_id", (req, res) => {

  const courseObject = getCourseObjectFromRequest(req);

  if (courseObject){

    // Course Object is present
    const courseIndex = allCourses.indexOf(courseObject);
    allCourses.splice(courseIndex, 1);

    const responseMessage = {
      message: `Course identified by ${courseObject.id} is deleted from the server`
    }
    
    res.send(responseMessage);
  }else{

    sendErrorResponseForInvalidCourseId(
      res, req.params.course_id);
  }
})

app.put("/courses/:course_id", (req, res) => {

  const courseObject = getCourseObjectFromRequest(req);

  if (courseObject){

    const courseName = req.body.name;
    const courseCost = req.body.cost;
  
    // Update with name, cost
    courseObject.name = courseName;
    courseObject.cost = courseCost;

    res.send(courseObject);

  }else{

    sendErrorResponseForInvalidCourseId(
      res, req.params.course_id);

  }
})

function getCourseObjectFromRequest(req){

  console.log("Params -> " + JSON.stringify(req.params));
  // const courseId = parseInt(req.params.course_id);
  const courseId = req.params.course_id;

  console.log(`Course ID is ${courseId}`);
  const courseResult = allCourses.find( (item) => 
    item.id === courseId
  )

  console.log(`Course Result is ${courseResult}`);  
  return courseResult;
}

function sendErrorResponseForInvalidCourseId(
  res, courseId){

  const errorResponse = {
    message: `Course by id ${courseId} not found`,
    technicalMessage : 'Check the request parameter value sent as part of the URL'
  }
  res.status(404).send(errorResponse);

}

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {

  console.log(`Server started and running at port ${PORT}`);
  
  let randomPort = server.address().port;
  console.log(`Random port is ${randomPort}`);
})