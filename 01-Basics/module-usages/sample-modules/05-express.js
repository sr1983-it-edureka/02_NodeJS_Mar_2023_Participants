
const myApp = {

  get(urlPath){
    console.log(`GET Mapping defined on ${urlPath}`);
  },

  post(urlPath){
    console.log(`POST Mapping defined on ${urlPath}`);
  },

  delete(urlPath){
    console.log(`DELETE Mapping defined on ${urlPath}`);
  }
}

function express(){

  return myApp;
}

module.exports = express;