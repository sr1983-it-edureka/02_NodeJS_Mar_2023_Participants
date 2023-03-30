
function getUser(id){

  const userObject = {
    id: id,
    username : 'manu',
    displayName : 'Manu'
  }

  return userObject;
}

function getUserFromDB(id){

  setTimeout( () => {

    const userObject = {
      id: id,
      username : 'manu',
      displayName : 'Manu'
    }
  
    return userObject;  
  }, 3000);

}

const userObj = getUser(1);
console.log(userObj);

const userObj2 = getUserFromDB(1);
console.log(userObj2);