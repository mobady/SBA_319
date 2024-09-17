import mongoose from 'mongoose';

export const validateUserInput = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || username.length < 3) {
    return res.status(400).json({ error: 'Username must be at least 3 characters long' });
  }

  const emailRegex = /.+\@.+\..+/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address' });
  }

  if (!password || password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }

  next();
};

export const validatePostInput = (req, res, next) => {
  const { title, body, author } = req.body;

  if (!title || title.length < 5) {
    return res.status(400).json({ error: 'Post title must be at least 5 characters long' });
  }

  if (!body || body.length < 10) {
    return res.status(400).json({ error: 'Post body must be at least 10 characters long' });
  }

  if (!author || !mongoose.Types.ObjectId.isValid(author)) {
    return res.status(400).json({ error: 'Invalid author ID' });
  }

  next();
};

export const validateCommentInput = (req, res, next) => {
  const { text, postId, userId } = req.body;

  if (!text || text.length < 3) {
    return res.status(400).json({ error: 'Comment must be at least 3 characters long' });
  }

  if (!postId || !mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).json({ error: 'Invalid post ID' });
  }

  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  next();
};
