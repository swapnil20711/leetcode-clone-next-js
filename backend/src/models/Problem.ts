import mongoose, { Schema, Document } from 'mongoose';
import { Difficulty } from '../types.js';

export interface ITestCase {
  id: string;
  input: string;
  expectedOutput: string;
}

export interface IProblem extends Document {
  slug: string;
  title: string;
  difficulty: Difficulty;
  description: string;
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
  starterCode: Record<string, string>;
  testCases: ITestCase[];
  createdAt: Date;
  updatedAt: Date;
}

const TestCaseSchema = new Schema<ITestCase>({
  id: { type: String, required: true },
  input: { type: String, required: true },
  expectedOutput: { type: String, required: true },
});

const ProblemSchema = new Schema<IProblem>(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    examples: [
      {
        input: { type: String, required: true },
        output: { type: String, required: true },
        explanation: { type: String },
      },
    ],
    constraints: [String],
    starterCode: {
      type: Schema.Types.Mixed,
      required: true,
    },
    testCases: [TestCaseSchema],
  },
  {
    timestamps: true,
  }
);

export const Problem = mongoose.model<IProblem>('Problem', ProblemSchema);

