const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const teacherSchema = new Schema({
  teacherId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

teacherSchema.statics.signup = async function (teacherId, name, password) {
  if (!teacherId || !name || !password) {
    throw Error("All fields must be filled");
  }
  const teacherIdExist = await this.findOne({ teacherId });
  if (teacherIdExist) {
    throw Error("TeacherId already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const teacher = await this.create({
    teacherId,
    name,
    password: hash,
  });

  return teacher;
};

teacherSchema.statics.login = async function (teacherId, password) {
  if (!teacherId || !password) {
    throw Error("All fields must be filled");
  }
  const teacher = await this.findOne({ teacherId });
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
