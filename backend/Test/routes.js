const express = require("express");

const testRoutes = express.Router();

testRoutes.get("/", getQuestions);
testRoutes.post("/", addQuestion);

module.exports = testRoutes;
