
// get me all schedules

const {schedules, MAX_NO_SCHEDULES} = require("./model");


const getAllSchedules = (req, res) => {
  res.send(schedules);
}

// get me the upcoming schedules

const getUpcomingSchedules = (req, res) => {

  // 1, 2, 3, 4, 5
  const upcomingSchedules = [];

  for (let index = 0; index < MAX_NO_SCHEDULES; index ++){
    
    upcomingSchedules[index] = schedules[index];
  }

  res.send(upcomingSchedules);
}

module.exports = {getAllSchedules, getUpcomingSchedules};