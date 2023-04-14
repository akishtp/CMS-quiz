const Question = require("../Question/model");
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

const getTest = async (req, res) => {
  const questions = [];
  try {
    const test = await Test.findOne({ _id: req.params.id });
    for (var i in test.questions) {
      const question_id = test.questions[i];
      const question = await Question.findOne({ _id: question_id });
      questions.push(question);
    }
    console.log(questions);
    res
      .status(200)
      .json({ questions, teacher: test.teacher, subject: test.subject });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addTest, getTest };
