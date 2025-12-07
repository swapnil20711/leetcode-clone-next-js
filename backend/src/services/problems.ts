import { Problem as ProblemModel } from '../models/Problem.js';
import { Problem } from '../types.js';

export async function getProblems(): Promise<Problem[]> {
  const problems = await ProblemModel.find().sort({ createdAt: -1 });
  return problems.map(p => ({
    id: p._id.toString(),
    slug: p.slug,
    title: p.title,
    difficulty: p.difficulty,
    description: p.description,
    examples: p.examples,
    constraints: p.constraints,
    starterCode: p.starterCode as Record<string, string>,
    testCases: p.testCases,
  }));
}

export async function getProblemBySlug(slug: string): Promise<Problem | null> {
  const problem = await ProblemModel.findOne({ slug });
  if (!problem) return null;
  
  return {
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
}

export async function addProblem(problem: Problem): Promise<Problem> {
  const newProblem = new ProblemModel({
    slug: problem.slug,
    title: problem.title,
    difficulty: problem.difficulty,
    description: problem.description,
    examples: problem.examples,
    constraints: problem.constraints,
    starterCode: problem.starterCode,
    testCases: problem.testCases,
  });
  
  const saved = await newProblem.save();
  return {
    id: saved._id.toString(),
    slug: saved.slug,
    title: saved.title,
    difficulty: saved.difficulty,
    description: saved.description,
    examples: saved.examples,
    constraints: saved.constraints,
    starterCode: saved.starterCode as Record<string, string>,
    testCases: saved.testCases,
  };
}
