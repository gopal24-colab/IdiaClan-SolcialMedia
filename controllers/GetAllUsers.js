const User = require("../models/User");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.json({ message: "Users retrieved successfully", users });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

const getUsers = async () => {
  try {
    return await User.find({}).sort({ createdAt: -1 });
  } catch (error) {
    return [{ message: "Error while fetching users" }];
  }
};

const getSingleUser = async (userId) => {
  try {
    return await User.findOne({ _id: userId });
  } catch (err) {
    return {};
  }
};

module.exports = { getAllUser, getUsers, getSingleUser };
