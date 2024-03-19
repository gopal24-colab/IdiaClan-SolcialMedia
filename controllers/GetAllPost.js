const Post = require("../models/Post");

const getAllPost = async (req, res) => {
  const { userId } = req;
  console.log(userId);
  try {
    const posts = await Post.find({ author: userId }).sort({ createdAt: -1 });
    res.json({ message: "Posts retrieved successfully", posts });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

module.exports = getAllPost;
