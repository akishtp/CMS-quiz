const express = require("express");
const { addTest, getTest, getAllTestByTeacher } = require("./controllers");
const requireTeacher = require("../middleware/requireTeacher");

const testRoutes = express.Router();

testRoutes.route("/").post(requireTeacher, addTest);
testRoutes.route("/all").get(requireTeacher, getAllTestByTeacher);
testRoutes.get("/:id", getTest);

module.exports = testRoutes;
