import mongoose, { Schema, Document, Types } from 'mongoose';
import { SubmissionResult } from '../types.js';

export interface ISubmission extends Document {
  userId: Types.ObjectId;
  problemId: Types.ObjectId;
  code: string;
  language: string;
  result: SubmissionResult;
  createdAt: Date;
  updatedAt: Date;
}

const TestResultSchema = new Schema({
  input: String,
  expected: String,
  actual: String,
  passed: Boolean,
  logs: String,
}, { _id: false });

const SubmissionResultSchema = new Schema({
  status: {
    type: String,
    enum: ['Accepted', 'Wrong Answer', 'Runtime Error', 'Compilation Error'],
    required: true,
  },
  totalTests: Number,
  passedTests: Number,
  results: [TestResultSchema],
  runtime: String,
  memory: String,
  error: String,
}, { _id: false });

const SubmissionSchema = new Schema<ISubmission>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    problemId: {
      type: Schema.Types.ObjectId,
      ref: 'Problem',
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    result: {
      type: SubmissionResultSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
SubmissionSchema.index({ userId: 1, createdAt: -1 });
SubmissionSchema.index({ problemId: 1, createdAt: -1 });

export const Submission = mongoose.model<ISubmission>('Submission', SubmissionSchema);

