const jwt = require("jsonwebtoken");
const Teacher = require("./model");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "30d" });
};

const signupTeacher = async (req, res) => {
  const { teacher_id, name, password } = req.body;
  try {
    const teacher = await Teacher.signup(teacher_id, name, password);
    const token = createToken(teacher._id);
    res.status(200).json({ teacher_id, name, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }
};

const loginTeacher = async (req, res) => {
  const { teacher_id, password } = req.body;
  try {
    const teacher = await Teacher.login(teacher_id, password);
    const token = createToken(teacher._id);
    res.status(200).json({ teacher_id, name: teacher.name, token });
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
