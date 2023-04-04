

const express = require("express");
const { getAllProjects } = require("./controller");
const {performAuthenticationCheck} = require("../authentication/util");


const projectRouter = express.Router();

projectRouter.get("/projects/list", 
performAuthenticationCheck, getAllProjects);

module.exports = {projectRouter};