import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { connectDatabase } from './config/database.js';
import { judgeCode } from './services/geminiService.js';
import { Problem } from './types.js';
import { authenticate, AuthRequest } from './middleware/auth.js';
import { Submission } from './models/Submission.js';
import { Problem as ProblemModel } from './models/Problem.js';
import authRoutes from './routes/auth.js';
import problemRoutes from './routes/problems.js';
import submissionRoutes from './routes/submissions.js';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDatabase();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/submissions', submissionRoutes);

// Judge endpoint (requires authentication)
app.post('/api/judge', authenticate, async (req: AuthRequest, res) => {
  try {
    const { problemId, code, language } = req.body;
    
    if (!problemId || !code || !language) {
      return res.status(400).json({
        error: 'Missing required fields: problemId, code, language'
      });
    }

    // Fetch problem from database
    const problem = await ProblemModel.findById(problemId);
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }

    // Convert problem to the expected format
    const problemData: Problem = {
      id: problem._id.toString(),
      slug: problem.slug,
      title: problem.title,
      difficulty: problem.difficulty,
      description: problem.description,
      examples: problem.examples,
      constraints: problem.constraints,
      starterCode: problem.starterCode as Record<string, string>,
      testCases: problem.testCases,
    };

    const result = await judgeCode(problemData, code, language);
    
    // Save submission to database
    const submission = new Submission({
      userId: req.user!.id,
      problemId: problem._id,
      code,
      language,
      result,
    });
    await submission.save();

    res.json({ result });
  } catch (error) {
    console.error('Judge API Error:', error);
    res.status(500).json({ error: 'Failed to judge code' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
