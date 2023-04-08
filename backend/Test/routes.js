const express = require("express");
const { addTest } = require("./controllers");
const requireTeacher = require("../middleware/requireTeacher");

const testRoutes = express.Router();

testRoutes.use(requireTeacher).post("/", addTest);

module.exports = testRoutes;
