const Post = require("../models/Post");

const getAllPost = async (req, res) => {
  const { userId } = req;

  try {
    const posts = await Post.find({ author: userId }).sort({ createdAt: -1 });
    res.json({ message: "Posts retrieved successfully", posts });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

const getPosts = async () => {
  try {
    return await Post.find({}).sort({ createdAt: -1 });
  } catch (error) {
    return [{ message: "Error fetching posts" }];
  }
};

module.exports = { getAllPost, getPosts };
