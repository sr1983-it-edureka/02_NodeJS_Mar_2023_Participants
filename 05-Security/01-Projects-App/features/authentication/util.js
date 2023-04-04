const jwt = require("jsonwebtoken")

const TWO_DAYS_IN_SECONDS = 2 * 24 * 60 * 60;

const createJWTCookieToken = (usernameValue) => {

  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

  const token = jwt.sign({
    username: usernameValue
  }, JWT_SECRET_KEY,
  {
    expiresIn : TWO_DAYS_IN_SECONDS
  })

  console.log(`Token is ${token}`);
  return token;
}

const performAuthenticationCheck = (req, res, next) => {

  const jwtToken = req.cookies.JWT;

  if (jwtToken){

    jwt.verify(jwtToken, process.env.JWT_SECRET_KEY, 
      (error, encodedToken) => {

        if (error){

          console.log("Token is tampered");
          res.redirect("/sign-up.html");
        }else{

          next();
        }
    })

  }else{

    console.log("Token not present, redirecting to home page");
    res.redirect("/sign-up.html");
  }

  // req -> jwt
  // verify

}

module.exports = {TWO_DAYS_IN_SECONDS, 
  createJWTCookieToken, performAuthenticationCheck};
