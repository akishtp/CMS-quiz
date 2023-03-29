const express = require("express");
const { signupTeacher, loginTeacher } = require("./controller");

const teacherRoutes = express.Router();

teacherRoutes.post("/login", loginTeacher);
teacherRoutes.post("/signup", signupTeacher);

module.exports = teacherRoutes;
