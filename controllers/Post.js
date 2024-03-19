const Post = require("../models/Post");

const CreatePost = async (req, res) => {
  const { userId } = req;
  const { data } = req.body;

  const newPost = new Post({
    author: userId,
    content: data,
  })

  try {
    const savedPost = await newPost.save();
    res.json({ message: 'Post created successfully', post: savedPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating post' });
  }
};

module.exports = CreatePost;
