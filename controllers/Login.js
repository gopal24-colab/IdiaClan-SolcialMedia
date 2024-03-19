const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password.toString(), user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    
    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: error.message || "Error" });
  }
};

module.exports = Login;
