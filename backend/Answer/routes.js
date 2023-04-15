const express = require("express");
const { submitTest, getAllAnswers } = require("./controllers");
const requireTeacher = require("../middleware/requireTeacher");

const answerRoutes = express.Router();

answerRoutes.post("/", submitTest);
answerRoutes.route("/:id").get(requireTeacher, getAllAnswers);

module.exports = answerRoutes;
