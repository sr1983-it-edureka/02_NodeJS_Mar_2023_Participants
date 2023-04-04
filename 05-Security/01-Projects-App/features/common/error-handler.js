

const handleError = (error) => {

  const message = error.message;

  if (!message || message === ""){
    return {
      error : "Server processing failure" 
    }
  }else{

    const code = error.code;
    if (code === 11000){

      return {
        error : "Unique constraint violation"
      }

    }else{
      return {
        error: message
      }
    }
  }

}

module.exports = {handleError}