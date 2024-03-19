const validator = require("validator");
const User = require("../models/User");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const errors = [];
  if (!validator.isEmail(email)) {
    errors.push("Invalid email format");
  }
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long");
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: "Validation errors", errors });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const user = new User({
    username,
    email,
    password,
  });

  const data = await user.save();
  res.status(200).json({
    message: "Registration successful.",
    data: {
      _id: data._id,
      username: data.username,
      email: data.email,
      createdAt: data.createdAt,
    },
  });
};

module.exports = register;
