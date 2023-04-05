

const {mongoDBConnect} = require("./connector.js");


const MONGODB_URI = "mongodb+srv://mongodb-user:password_12345@cluster0.dxlrj6w.mongodb.net/sample?retryWrites=true&w=majority";

mongoDBConnect(MONGODB_URI);

