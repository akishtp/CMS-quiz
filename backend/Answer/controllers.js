const Answer = require("./model");
const Test = require("../Test/model");

const submitTest = async (req, res) => {
  const { test_id, regno, answer } = req.body;
  var marks = 0;
  try {
    for (const s of answer) {
      if (s === 1) {
        marks += 1;
      }
    }
    const response = await Answer.create({
      test_id,
      regno,
      answer,
      marks,
    });

    const test = await Test.findOne({ _id: test_id });
    test.answers.push(response._id);
    await test.save();
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }
};

const getAllAnswers = async (req, res) => {
  var sendingArray = [];
  try {
    const answers = await Answer.find({ test_id: req.params.id }).sort({
      regno: 1,
    });
    answers.map((answer) => {
      const sendable = { regno: answer.regno, marks: answer.marks };
      sendingArray.push(sendable);
    });
    res.status(200).json({ sendingArray });
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }
};
module.exports = { submitTest, getAllAnswers };
