const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const teacherSchema = new Schema({
  teacher_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

teacherSchema.statics.signup = async function (teacher_id, name, password) {
  if (!teacher_id || !name || !password) {
    throw Error("All fields must be filled");
  }
  const teacher_idExist = await this.findOne({ teacher_id });
  if (teacher_idExist) {
    throw Error("teacher_id already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const teacher = await this.create({
    teacher_id,
    name,
    password: hash,
  });

  return teacher;
};

teacherSchema.statics.login = async function (teacher_id, password) {
  if (!teacher_id || !password) {
    throw Error("All fields must be filled");
  }
  const teacher = await this.findOne({ teacher_id });
  if (!teacher) {
    throw Error("Teacher does not exist");
  }
  const match = await bcrypt.compare(password, teacher.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return teacher;
};

module.exports = mongoose.model("Teacher", teacherSchema);
