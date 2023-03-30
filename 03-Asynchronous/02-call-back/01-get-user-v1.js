function getUserFromDB(id, processResult){

  setTimeout( () => {

    const userObject = {
      id: id,
      username : 'manu',
      displayName : 'Manu'
    }
    // function()
    // function
    processResult(userObject);

  }, 3000);

}

function processResult(userObject){
  console.log(userObject);
}

getUserFromDB(1, processResult);
