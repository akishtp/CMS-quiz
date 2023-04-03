const express = require("express");
const { addTest } = require("./controllers");

const testRoutes = express.Router();

testRoutes.post("/", addTest);

module.exports = testRoutes;
