const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const answerSchema = new Schema({
  test_id: { type: String, required: true },
  regno: { type: String, required: true },
  answer: { type: Array, required: true },
  marks: { type: Number, required: true },
});

module.exports = mongoose.model("Answer", answerSchema);
