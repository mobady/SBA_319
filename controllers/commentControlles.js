import Comment from '../models/comment.js';

// Get all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate('postId', 'title')
      .populate('userId', 'username email');
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new comment
const createComment = async (req, res) => {
  const { text, postId, userId } = req.body;
  try {
    const newComment = new Comment({ text, postId, userId });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a comment
const updateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('postId', 'title')
      .populate('userId', 'username');
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a comment
const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Comment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { getAllComments, createComment, updateComment, deleteComment };
