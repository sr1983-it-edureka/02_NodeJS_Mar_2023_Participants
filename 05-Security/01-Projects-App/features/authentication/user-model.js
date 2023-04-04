
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({

  username : {
    type: String,
    unique: true,
    required : [true, "Please supply username"]
  },

  password : {
    type : String,
    required: [true, "Please supply password"],
    minlength : [8, "Password should be atleast 8 characters long"]
  }

})

userSchema.statics.findUser = async (username, password) => {

  const userDocument = await User.findOne({
    username : username
  })

  if (userDocument){

    const passwordsEqual 
      = await bcrypt.compare(password, userDocument.password);

    if (passwordsEqual){
      return userDocument;
    }else{
      throw new Error(`Incorrect password ${password} supplied for the username ${username}`);
    }
  }else{

    throw new Error(`User by the username ${username} does not exist`);

  }
}

userSchema.pre("save", async function (next) {

  console.log("Pre save called..")
  console.log(JSON.stringify(this));

  const plainTextPassword = this.password;
  console.log(`Plain text password -> ${plainTextPassword}` );

  const salt = await bcrypt.genSalt();
  console.log(`Salt is ${salt}`);

  const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
  console.log(`Hashed password -> ${hashedPassword}` );

  this.password = hashedPassword;

  next();

});

/*userSchema.post("save", (next) => {

  console.log("Post save called..")
  console.log(JSON.stringify(this));

  next();
});
*/

const User = mongoose.model("user", userSchema);


module.exports = {User}