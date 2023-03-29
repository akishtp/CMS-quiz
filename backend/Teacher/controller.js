const jwt = require("jsonwebtoken");
const Teacher = require("../Teacher/model");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "30d" });
};

const signupTeacher = async (req, res) => {
  const { teacherId, name, password } = req.body;
  try {
    const teacher = await Teacher.signup(teacherId, name, password);
    const token = createToken(teacher._id);
    res.status(200).json({ teacherId, name, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }
};

const loginTeacher = async (req, res) => {
  const { teacherId, password } = req.body;
  try {
    const teacher = await Teacher.login(teacherId, password);
    const token = createToken(teacher._id);
    res.status(200).json({ teacherId, name: teacher.name, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }
};

// // user edit Controller
// const updateUser = async (req, res) => {
//   try {
//     const user = await User.updatehim(req);
//     const token = createToken(user._id);
//     res.status(200).json({
//       name: user.name,
//       email: user.email,
//       token,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//     return;
//   }
// };

module.exports = { signupTeacher, loginTeacher };
