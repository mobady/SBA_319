import express from 'express';
import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/userControlles.js';
import { validateUserInput } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', validateUserInput, createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
