const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

const MONGODB_URL = config.get("MONGODB_URL");
console.log(MONGODB_URL);


/*const nodeEnv = process.env.NODE_ENV;
console.log(`Node ENV is ${nodeEnv}`);
*/

/*const nodeEnv2 = config.get("env");
console.log(`Node Env 2 is ${nodeEnv2}`);
*/

const loggingEnabled = config.get("LOGGING_ENABLED");

mongoose.connect(MONGODB_URL)
  .then( () => {
    if (loggingEnabled){
      console.log(`MongoDB Connection is successful`)
    }
  })
  .catch( (error) => {
    console.log(error);
  })

const PORT = config.get("PORT");
const server = app.listen(PORT, () => {

  let randomPort = server.address().port;
  console.log(`Server started and running at port ${PORT}`);

  if (loggingEnabled){
    console.log(`Random port is ${randomPort}`);
  }
  
})


const stripePaymentKey = config.get("STRIPE_PAYMENT_KEY");

// Stripe.doPayment(stripePaymentKey);

console.log(stripePaymentKey);