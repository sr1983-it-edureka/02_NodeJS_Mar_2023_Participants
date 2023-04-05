
const { handleError } = require("../common/error-handler");
const {User} = require("./user-model");
const {TWO_DAYS_IN_SECONDS, createJWTCookieToken} = require("./util");

const register = async (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  try{
    const newUserObj = await User.create({
      username, password
    })
    console.log(newUserObj);
  
    const token = createJWTCookieToken(username);

    res.cookie("JWT", token, {
      maxAge: TWO_DAYS_IN_SECONDS * 1000
    })  

    res.status(201).json({
      user : newUserObj
    })  
  }catch(error){
    console.log(error);
    res.status(400).json(handleError(error));
  }
}

const login = async (req, res) => {

  //  Check Username, password
  const username = req.body.username;
  const password = req.body.password;

  try{
    const userObj = await User.findUser(username, password);

    const token = createJWTCookieToken(username);

    res.cookie("JWT", token, {
      maxAge: TWO_DAYS_IN_SECONDS * 1000
    })  

    res.json({
      user : userObj
    })
  }catch(error){

    console.log(error);
    res.status(400).json(handleError(error));
  }

  // JWT Token -> 
}

const logout = (req, res) => {

  console.log('Logouut called..')
  res.cookie("JWT", "", {
    maxAge : 1
  })

  res.status(200).json({
      message : "Signout Success"
    }
  )
}

module.exports = {register, login, logout};