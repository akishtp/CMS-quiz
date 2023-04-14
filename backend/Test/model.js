const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Question = require("../Question/model");

const testSchema = new Schema(
  {
    questions: { type: Array, required: true },
    teacher: { type: String, required: true },
    teacher_id: { type: String, required: true },
    subject: { type: String, required: true },
    answers: { type: Array, required: true, default: [] },
  },
  {
    timestamps: true,
  }
);

testSchema.statics.createQuestion = async function (question, options, answer) {
  if (!question | !options | !answer) {
    throw Error("All fields must be filled");
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
    question,
    options,
    answer,
  });

  return response;
};

module.exports = mongoose.model("Test", testSchema);
