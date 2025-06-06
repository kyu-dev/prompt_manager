import express from 'express';
import {
  createPrompt,
  editPrompt,
  deletePrompt,
  copiedat,
  getPrompts,
  getPrompsOrderedByCopiedAt
} from '../controller/promptController.js';
import ensureAuthenticated from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/create', ensureAuthenticated, createPrompt);
router.get('/get', ensureAuthenticated, getPrompts);
router.get('/getorderbycopiedat', ensureAuthenticated, getPrompsOrderedByCopiedAt) 
router.put('/edit', ensureAuthenticated, editPrompt);
router.delete('/delete/:id', ensureAuthenticated, deletePrompt);
router.put('/copied', ensureAuthenticated, copiedat)

export default router;
