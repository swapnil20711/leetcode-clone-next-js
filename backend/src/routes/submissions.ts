import express, { Response } from 'express';
import { Submission } from '../models/Submission.js';
import { Problem as ProblemModel } from '../models/Problem.js';
import { authenticate, AuthRequest } from '../middleware/auth.js';
import { SubmissionResult } from '../types.js';

const router = express.Router();

// Get user's submissions
router.get('/me', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const submissions = await Submission.find({ userId: req.user!.id })
      .populate('problemId', 'title slug difficulty')
      .sort({ createdAt: -1 })
      .limit(50);
    
    res.json({ submissions });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

// Get submissions for a specific problem
router.get('/problem/:problemId', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { problemId } = req.params;
    const submissions = await Submission.find({
      userId: req.user!.id,
      problemId,
    })
      .sort({ createdAt: -1 })
      .limit(20);
    
    res.json({ submissions });
  } catch (error) {
    console.error('Error fetching problem submissions:', error);
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

// Create a new submission
router.post('/', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { problemId, code, language, result } = req.body;

    if (!problemId || !code || !language || !result) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Verify problem exists
    const problem = await ProblemModel.findById(problemId);
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }

    const submission = new Submission({
      userId: req.user!.id,
      problemId,
      code,
      language,
      result,
    });

    await submission.save();

    res.status(201).json({ submission });
  } catch (error) {
    console.error('Error creating submission:', error);
    res.status(500).json({ error: 'Failed to create submission' });
  }
});

export default router;

