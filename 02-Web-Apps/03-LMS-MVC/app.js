
const {schedulingRouter} =  require("./features/scheduler/router");

const {classRecordingsRouter} = require("./features/class-recordings/router");


const express = require("express");
const app = express();
app.use(express.json());

app.use(schedulingRouter);
app.use(classRecordingsRouter);

const PORT = 9999;
app.listen(PORT, () => {

  console.log(`Server started and running at port ${PORT}`);
})