const express = require("express");
const { signupTeacher, loginTeacher } = require("./controllers");

const teacherRoutes = express.Router();

teacherRoutes.post("/login", loginTeacher);
teacherRoutes.post("/signup", signupTeacher);

module.exports = teacherRoutes;
