
const mongoose = require("mongoose");

const mongoDBConnect = (mongoDBURI) => {

  mongoose.connect(mongoDBURI)
  .then( () => {
    console.log(`MongoDB Connection is successful`)
  })
  .catch( (error) => {
    console.log(error);
  })
}

const mongoDBDisconnect = () => {

}

module.exports = {mongoDBConnect, mongoDBDisconnect}