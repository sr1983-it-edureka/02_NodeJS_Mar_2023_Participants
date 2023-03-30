
const {getAllClassRecordings} = require("./controller");

const express = require("express");

const classRecordingsRouter = express.Router();

classRecordingsRouter.get("/class-recordings/all", getAllClassRecordings);

module.exports = {classRecordingsRouter};
