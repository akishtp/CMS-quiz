const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  questions: { type: Array, required: true },
});

module.exports = mongoose.model("Test", testSchema);
