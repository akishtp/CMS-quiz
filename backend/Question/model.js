const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const questionSchema = new Schema({
  question: { type: String, required: true },
  options: { type: Array, required: true },
  answer: { type: String, required: true },
});

module.exports = mongoose.model("Question", questionSchema);
