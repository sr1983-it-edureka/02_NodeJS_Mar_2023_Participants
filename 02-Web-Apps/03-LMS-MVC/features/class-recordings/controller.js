
const {classRecordings} = require("./model");

const getAllClassRecordings = (req, res) => {
  res.send(classRecordings);
}

module.exports = {getAllClassRecordings};