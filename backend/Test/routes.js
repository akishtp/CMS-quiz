const express = require("express");
const { addTest, getTest } = require("./controllers");
const requireTeacher = require("../middleware/requireTeacher");

const testRoutes = express.Router();

testRoutes.post("/", addTest).post(requireTeacher);
testRoutes.get("/:id", getTest);

module.exports = testRoutes;
