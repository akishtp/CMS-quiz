const express = require("express");
const { getQuestions, addQuestion } = require("./controllers");

const questionRoutes = express.Router();

questionRoutes.get("/", getQuestions);
questionRoutes.post("/", addQuestion);

// // delete blog
// blogsRouter.delete("/:id", deleteBlog);

// // edit blog
// blogsRouter.patch("/:id", updateBlog);

module.exports = questionRoutes;
