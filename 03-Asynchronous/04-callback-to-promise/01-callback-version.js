
function getUserFromDB(id, processUserResponse){

  setTimeout( () => {

    const userObject = {
      id: id,
      username : 'manu',
      displayName : 'Manu'
    }
    // function()
    // function
    processUserResponse(userObject);

  }, 2000);
}


function getCoursesForUser(username, processCoursesResponse){

  setTimeout( () => {

    const userCourses = [
      {id: 1, name: 'Java FSD', cost : 12345},
      {id: 2, name : 'Mastering NodeJS', cost: 23456},
      {id: 3, name: 'AWS Certification Course', cost: 34567}
    ]

    processCoursesResponse(userCourses);

  }, 2000);

}

function getBatchDetailsForCourses(courseId){

  setTimeout( () => {

    const batchDetails = {
      courseId : courseId,

      batches : [
        {batchId: 1, trainer: 'Manoj', noOfParticipants : 23},
        {batchId: 2, trainer: 'Ekta', noOfParticipants : 25},
        {batchId: 3, trainer: 'Raghu', noOfParticipants : 30},
      ]
    }

    const errorObject = {
      error: true,
      warnings: true,
      message : "Not all the batch information retrived from the database"
    }

    processBatchDetailsResponse(batchDetails, errorObject);

  }, 2000);

}

getUserFromDB(1, (userObject) => {

  console.log(userObject);

  getCoursesForUser(userObject.username, (courses) => {

    console.log(courses);

    const firstCourse = courses[0];
  
    getBatchDetailsForCourses(firstCourse.id, (batchDetails, errorObject)=> {

      console.log(batchDetails);
      console.log(errorObject);    
    });  
  });
});

