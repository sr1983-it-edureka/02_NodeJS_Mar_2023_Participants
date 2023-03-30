
function getUserFromDB(id){

  return new Promise ( (resolve, reject) => {

    setTimeout( () => {

      const userObject = {
        id: id,
        username : 'manu',
        displayName : 'Manu'
      }
      // function()
      // function
      resolve(userObject);
  
    }, 2000);
  }); 

}


function getCoursesForUser(username){

  return new Promise( (resolve, reject) => {

    setTimeout( () => {

      const userCourses = [
        {id: 1, name: 'Java FSD', cost : 12345},
        {id: 2, name : 'Mastering NodeJS', cost: 23456},
        {id: 3, name: 'AWS Certification Course', cost: 34567}
      ]
  
      resolve(userCourses);
  
    }, 2000);
  
  });
}

function getBatchDetailsForCourses(courseId){

  return new Promise ( (resolve, reject) => {

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

      let successFlag = true;       
      console.log(successFlag);

      if (successFlag){
        resolve(batchDetails)
      }else{
        reject(errorObject);
      }
  
    }, 2000);
  });

}

// Version 1

getUserFromDB(1)
  .then( (userObject) => {
    console.log(userObject);
    return getCoursesForUser(userObject.username)
  })
  .then( (courses) => {
    console.log(courses);
    const id = courses[0].id;
    console.log(`Course Id ${id}`);
    return getBatchDetailsForCourses(id);
  }) 
  .then ((batchDetails) => {
    console.log(batchDetails)
  })
  .catch ( (error) => {
    console.log(error);
  })


// Version 2

/*
getUserFromDB(1)
  .then( (userObject) => 
    getCoursesForUser(userObject.username)
  )
  .then( (courses) =>
    getBatchDetailsForCourses(courses[0].id)
  ) 
  .then ((batchDetails) =>
    console.log(`Batch Details -> ` + batchDetails)
  )
  .catch ( (error) =>
    console.log(error)
  )
  
/*


*/


/*
getBatchDetailsForCourses(1)
  .then( (batchDetails) => {
    console.log(`Batch Details -> ` + batchDetails)
  })
  .catch( (error) => {
    console.log(error);
  })

  */