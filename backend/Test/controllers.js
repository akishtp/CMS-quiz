const Question = require("../Question/model");
const Test = require("./model");

const addTest = async (req, res) => {
  const sending = [];
  const { questions } = req.body;
  for (var i in questions) {
    const que = questions[i].question;
    const options = questions[i].options;
    const answer = questions[i].answer;
    try {
      if (!que || !options || !answer) {
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
      const response = await Question.create({
        question: que,
        options,
        answer,
      });
      sending.push(response._id);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  try {
    const final = await Test.create({ sending });
    res.status(200).json(final);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addTest };
