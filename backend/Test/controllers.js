// const Question = require("../Question/model");
const Test = require("./model");

const addTest = async (req, res) => {
  const teacherId = req.teacher._id;
  const teacher = req.teacher.name;
  const sending = [];
  const { questions, subject } = req.body;
  try {
    for (var i in questions) {
      const question = questions[i].question;
      const options = questions[i].options;
      const answer = questions[i].answer;
      const response = await Test.createQuestion(question, options, answer);
      sending.push(response._id);
    }
    const response = await Test.create({
      questions: sending,
      teacher,
      teacherId,
      subject,
    });
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addTest };
