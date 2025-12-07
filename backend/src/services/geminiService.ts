import { GoogleGenAI, Type } from '@google/genai';
import { Problem, SubmissionResult } from '../types.js';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const judgeCode = async (
  problem: Problem,
  code: string,
  language: string
): Promise<SubmissionResult> => {
  const model = 'gemini-2.5-flash';

  const systemPrompt = `You are a strict code judge for a competitive programming platform.
Your task is to execute and verify code provided by users against a set of test cases.
You must simulate the execution of the code accurately in the requested language.
Do not simply guess; trace the logic.
If the code has syntax errors, return "Compilation Error".
If the code logic is incorrect for any test case, return "Wrong Answer".
If the code works for all test cases, return "Accepted".
If the code is inefficient or loops infinitely, return "Runtime Error" or "Time Limit Exceeded".

You will be given:
1. The Problem Description
2. The User's Code
3. The Target Language
4. A list of Test Cases (Input and Expected Output)

You must return a JSON object strictly following the schema.`;

  const userPrompt = `
Problem: ${problem.title}
Description: ${problem.description}

Language: ${language}

User Code:
\`\`\`${language}
${code}
\`\`\`

Test Cases:
${JSON.stringify(problem.testCases)}

Evaluate the code against ALL provided test cases.
`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            status: {
              type: Type.STRING,
              enum: ['Accepted', 'Wrong Answer', 'Runtime Error', 'Compilation Error']
            },
            totalTests: { type: Type.INTEGER },
            passedTests: { type: Type.INTEGER },
            error: { type: Type.STRING },
            results: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  input: { type: Type.STRING },
                  expected: { type: Type.STRING },
                  actual: { type: Type.STRING },
                  passed: { type: Type.BOOLEAN },
                  logs: { type: Type.STRING }
                },
                required: ['input', 'expected', 'actual', 'passed']
              }
            }
          },
          required: ['status', 'totalTests', 'passedTests', 'results']
        }
      }
    });

    const text = response.text;
    if (!text) {
        throw new Error("No response from AI Judge");
    }
    const result = JSON.parse(text) as SubmissionResult;
    return result;

  } catch (error) {
    console.error("Gemini Judge Error:", error);
    return {
      status: 'Runtime Error',
      totalTests: 0,
      passedTests: 0,
      results: [],
      error: 'The AI Judge encountered an error while processing your submission.'
    };
  }
};

