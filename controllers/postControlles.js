import Post from '../models/post.js';

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username email'); // Populating author field with user info
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new post
const createPost = async (req, res) => {
  const { title, body, author } = req.body;
  try {
    const newPost = new Post({ title, body, author });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a post
const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('author', 'username');
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { getAllPosts, createPost, updatePost, deletePost };
