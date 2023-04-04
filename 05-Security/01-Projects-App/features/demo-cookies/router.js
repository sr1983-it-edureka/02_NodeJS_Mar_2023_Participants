
const express = require("express");
const {generateCookies, listCookiesFromBrowser} = require("./controller");

const demoCookiesRouter = express.Router();

demoCookiesRouter.get("/projects/demo/cookies/generate", generateCookies)

demoCookiesRouter.get("/projects/demo/cookies/list", listCookiesFromBrowser)

module.exports = {demoCookiesRouter}