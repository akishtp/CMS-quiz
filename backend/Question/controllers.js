const Blog = require("./model");

const getQuestions = async (req, res) => {
  const blogs = await Blog.find({}).sort({ date: -1 });
  res.status(200).json(blogs);
};

const addQuestion = async (req, res) => {
  const { question, options, answer } = req.body;
  try {
    if (!question || !options || !answer) {
      throw Error("Fill all fields pls 🥺👉👈");
    }
    let isThere = 0;
    for (const o of options) {
      if (answer === o) {
        isThere += 1;
      }
    }

    if (isThere === 0) {
      throw Error("Answer does not exist in options");
    } else if (isThere > 1) {
      throw Error("Answer exists twice in options");
    }
    const blog = await Blog.create({ question, options, answer });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addQuestion, getQuestions };
