
const databaseConnection = {
  providerName : 'Oracle',
  version : '11G',
  connection : {}
}

const errorObject = {
  errorCode : 123,
  errorMessage : 'Too many database clients attempting to connect to this database server'
}

let errorFlag = true;

const databaseConnectPromise 
  = new Promise( (resolveHandler, rejectHandler) => {

    setTimeout( () => {

      // Logic reside here
      // Take the URL, connect to the database


      if (errorFlag){
        rejectHandler(errorObject)
      }else{

        resolveHandler(databaseConnection);;
              // Success
      }

    }, 3000);

})


databaseConnectPromise
  .then( (result) => {
    console.log(`Result is ` + JSON.stringify(result));
  })
  .catch ( (error) => {
    console.log(`Error is ` + JSON.stringify(error));
  })

