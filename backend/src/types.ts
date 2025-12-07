export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
}

export interface Problem {
  id: string;
  slug: string;
  title: string;
  difficulty: Difficulty;
  description: string; // Markdown supported
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
  starterCode: Record<string, string>; // language -> code
  testCases: TestCase[];
}

export interface TestResult {
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
  logs?: string;
}

export interface SubmissionResult {
  status: 'Accepted' | 'Wrong Answer' | 'Runtime Error' | 'Compilation Error';
  totalTests: number;
  passedTests: number;
  results: TestResult[];
  runtime?: string;
  memory?: string;
  error?: string;
}

export enum SupportedLanguage {
  JAVASCRIPT = 'javascript',
  PYTHON = 'python',
  CPP = 'cpp',
  JAVA = 'java'
}

