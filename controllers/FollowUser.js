const User = require("../models/User");

const followUser = async (req, res) => {
  const currUserId = req.userId;
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const currUser = await User.findById(currUserId);
    const isAlreadyFollow = currUser.followers.find((e) => e._id === userId);
    if (isAlreadyFollow) {
      res.json({ message: "You already following this user" });
    }
    const following = currUser.following;
    currUser.following = [...following, userId];

    const followers = user.followers;
    user.followers = [...followers, currUserId];
    await user.save();

    const data = await currUser.save();
    res.status(201).json({
      message: "Add user to your following",
      user: data,
    });
  } catch ({ message }) {
    res.status(500).json({ message: "Error adding follower:", error: message });
  }
};

module.exports = followUser;
