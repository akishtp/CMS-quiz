const Answer = require("./model");

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
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }
};

module.exports = { submitTest };
