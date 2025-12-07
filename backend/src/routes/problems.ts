import express, { Response } from 'express';
import { getProblems, getProblemBySlug, addProblem } from '../services/problems.js';
import { Problem } from '../types.js';
import { authenticate, requireAdmin, AuthRequest } from '../middleware/auth.js';

const router = express.Router();

// Get all problems (public)
router.get('/', async (req, res: Response) => {
  try {
    const problems = await getProblems();
    res.json({ problems });
  } catch (error) {
    console.error('Error fetching problems:', error);
    res.status(500).json({ error: 'Failed to fetch problems' });
  }
});

// Get problem by slug (public)
router.get('/:slug', async (req, res: Response) => {
  try {
    const { slug } = req.params;
    const problem = await getProblemBySlug(slug);
    
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }
    
    res.json({ problem });
  } catch (error) {
    console.error('Error fetching problem:', error);
    res.status(500).json({ error: 'Failed to fetch problem' });
  }
});

// Add problem (admin only)
router.post('/', authenticate, requireAdmin, async (req: AuthRequest, res: Response) => {
  try {
    const newProblem: Problem = req.body;
    const problem = await addProblem(newProblem);
    res.status(201).json({ problem });
  } catch (error) {
    console.error('Error creating problem:', error);
    res.status(500).json({ error: 'Failed to create problem' });
  }
});

export default router;

