const express = require("express");
const { submitTest } = require("./controllers");

const answerRoutes = express.Router();

answerRoutes.post("/", submitTest);

module.exports = answerRoutes;
