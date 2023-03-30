
const express = require("../sample-modules/05-express");

console.log(express);

const app = express();

console.log(app);

app.get("/courses");

app.post("/courses");

app.delete("/courses/:id");