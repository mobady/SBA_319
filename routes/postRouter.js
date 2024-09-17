import express from 'express';
import { getAllPosts, createPost, updatePost, deletePost } from '../controllers/postControlles.js';
import { validatePostInput } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.get('/', getAllPosts);
router.post('/', validatePostInput, createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
