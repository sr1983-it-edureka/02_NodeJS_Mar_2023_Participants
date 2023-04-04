

const express = require("express");
const { register, login, logout } = require("./user-controller");

const authenticationRouter = express.Router();


authenticationRouter.post("/projects/auth/register", register);
authenticationRouter.post("/projects/auth/login", login);
authenticationRouter.get("/projects/auth/logout", logout);


module.exports = {authenticationRouter};