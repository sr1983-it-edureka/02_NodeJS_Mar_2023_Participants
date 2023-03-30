
const {getAllSchedules, getUpcomingSchedules} = require("./controller");

const express = require("express");

const schedulingRouter = express.Router();

schedulingRouter.get("/schedules/all", getAllSchedules);
schedulingRouter.get("/schedules/upcoming", getUpcomingSchedules);

module.exports = {schedulingRouter};
