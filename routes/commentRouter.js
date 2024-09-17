import express from 'express';
import { getAllComments, createComment, updateComment, deleteComment } from '../controllers/commentControlles.js';
import { validateCommentInput } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.get('/', getAllComments);
router.post('/', validateCommentInput, createComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

export default router;
