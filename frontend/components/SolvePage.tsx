'use client'

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { useProblems } from '@/context/ProblemContext';
import { useAuth } from '@/context/AuthContext';
import { CodeEditorWindow } from './CodeEditorWindow';
import { SupportedLanguage, SubmissionResult } from '@/types';
import { Play, RotateCcw, CheckCircle, XCircle, AlertTriangle, Loader2 } from 'lucide-react';
import { Navbar } from './Navbar';
import { ProtectedRoute } from './ProtectedRoute';

export const SolvePage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const { getProblemBySlug } = useProblems();
  const { token, isAuthenticated } = useAuth();
  
  const [problem, setProblem] = useState(getProblemBySlug(slug || ''));
  const [language, setLanguage] = useState<string>(SupportedLanguage.JAVASCRIPT);
  const [code, setCode] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  // Sync problem state if slug changes or context loads
  useEffect(() => {
    const p = getProblemBySlug(slug || '');
    if (p) {
      setProblem(p);
      setCode(p.starterCode[language] || '');
      setResult(null);
    }
  }, [slug, getProblemBySlug, language]);

  // Update code when language changes
  useEffect(() => {
    if (problem) {
        setCode(problem.starterCode[language] || '');
    }
  }, [language, problem]);

  const handleRun = async () => {
    if (!problem || !isAuthenticated || !token) {
      router.push('/login');
      return;
    }
    
    setIsRunning(true);
    setResult(null);
    
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    
    try {
      const response = await fetch(`${API_URL}/api/judge`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          problemId: problem.id,
          code,
          language,
        }),
      });

      const data = await response.json();
      if (data.result) {
        setResult(data.result);
      } else {
        throw new Error(data.error || 'Invalid response from judge');
      }
    } catch (error: any) {
      console.error('Failed to judge code:', error);
      setResult({
        status: 'Runtime Error',
        totalTests: 0,
        passedTests: 0,
        results: [],
        error: error.message || 'Failed to connect to the judge service.'
      });
    } finally {
      setIsRunning(false);
    }
  };

  if (!problem) return (
    <div className="min-h-screen bg-dark-bg text-gray-100 flex flex-col">
      <Navbar />
      <div className="text-white p-10">Problem not found.</div>
    </div>
  );

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-dark-bg text-gray-100 flex flex-col">
        <Navbar />
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        {/* Left Panel: Description */}
        <div className="w-1/2 h-full flex flex-col border-r border-white/10">
          <div className="bg-dark-layer px-4 py-2 border-b border-white/10 flex items-center space-x-2">
              <span className="font-medium text-brand-orange">Description</span>
          </div>
          <div className="flex-1 overflow-y-auto p-6 prose prose-invert max-w-none">
            <h1 className="text-2xl font-bold mb-4">{problem.title}</h1>
            
            <div className="flex items-center space-x-2 mb-6">
              <span className={`px-2 py-1 rounded text-xs font-medium bg-white/10 
                ${problem.difficulty === 'Easy' ? 'text-green-500' : 
                  problem.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>
                {problem.difficulty}
              </span>
            </div>

            <ReactMarkdown>{problem.description}</ReactMarkdown>

            <div className="mt-8 space-y-6">
              {problem.examples.map((ex, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-lg">
                  <p className="font-bold text-sm mb-2 text-white">Example {i + 1}:</p>
                  <div className="space-y-1 font-mono text-sm text-gray-300">
                    <p><span className="text-gray-500 select-none">Input:</span> {ex.input}</p>
                    <p><span className="text-gray-500 select-none">Output:</span> {ex.output}</p>
                    {ex.explanation && <p><span className="text-gray-500 select-none">Explanation:</span> {ex.explanation}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-sm mb-2">Constraints:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                {problem.constraints.map((c, i) => <li key={i}><ReactMarkdown>{c}</ReactMarkdown></li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Panel: Editor & Terminal */}
        <div className="w-1/2 h-full flex flex-col">
          {/* Editor Toolbar */}
          <div className="bg-dark-layer px-4 py-2 border-b border-white/10 flex items-center justify-between">
             <div className="flex items-center space-x-2">
               <select 
                 value={language} 
                 onChange={(e) => setLanguage(e.target.value)}
                 className="bg-white/10 border-none text-xs rounded px-2 py-1 focus:ring-1 focus:ring-brand-orange outline-none cursor-pointer"
               >
                 {Object.values(SupportedLanguage).map(lang => (
                   <option key={lang} value={lang} className="bg-dark-bg">
                     {lang.charAt(0).toUpperCase() + lang.slice(1)}
                   </option>
                 ))}
               </select>
             </div>
             
             <div className="flex items-center space-x-2">
                <button 
                   onClick={() => setCode(problem.starterCode[language])}
                   className="p-1.5 text-gray-400 hover:text-white transition-colors"
                   title="Reset Code"
                >
                  <RotateCcw size={14} />
                </button>
             </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-y-auto relative">
             <CodeEditorWindow 
               code={code} 
               onChange={setCode} 
               language={language === 'cpp' || language === 'c' ? 'clike' : language} 
             />
          </div>

          {/* Results / Terminal Panel */}
          <div className={`border-t border-white/10 bg-[#1e1e1e] flex flex-col transition-all duration-300 ${result ? 'h-1/2' : 'h-12'}`}>
              <div className="bg-dark-layer px-4 h-12 flex items-center justify-between shrink-0 border-b border-white/5">
                 <span className="text-sm font-medium text-gray-400">Test Result</span>
                 <button 
                   onClick={handleRun} 
                   disabled={isRunning}
                   className="flex items-center space-x-2 bg-brand-orange/90 hover:bg-brand-orange text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {isRunning ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />}
                   <span>Run</span>
                 </button>
              </div>

              {/* Expanded Results View */}
              {result && (
                <div className="flex-1 overflow-y-auto p-4">
                    <div className={`mb-4 flex items-center space-x-2 text-lg font-bold
                      ${result.status === 'Accepted' ? 'text-green-500' : 
                        result.status === 'Compilation Error' ? 'text-yellow-500' : 'text-red-500'}`}>
                       {result.status === 'Accepted' && <CheckCircle size={24} />}
                       {result.status === 'Wrong Answer' && <XCircle size={24} />}
                       {(result.status === 'Runtime Error' || result.status === 'Compilation Error') && <AlertTriangle size={24} />}
                       <span>{result.status}</span>
                    </div>

                    {result.error && (
                      <div className="bg-red-500/10 border border-red-500/20 text-red-200 p-3 rounded-md mb-4 text-sm font-mono whitespace-pre-wrap">
                        {result.error}
                      </div>
                    )}

                    {result.results.length > 0 && (
                      <div className="space-y-4">
                         <div className="flex space-x-2">
                            {result.results.map((r, i) => (
                               <button key={i} className={`px-3 py-1 rounded-full text-xs font-medium border
                                 ${r.passed ? 'border-green-500/30 text-green-500 bg-green-500/10' : 'border-red-500/30 text-red-500 bg-red-500/10'}`}>
                                  Case {i + 1}
                               </button>
                            ))}
                         </div>

                         <div className="grid gap-4">
                            {result.results.map((r, i) => (
                               <div key={i} className="bg-white/5 rounded-lg p-3 space-y-2 text-sm">
                                  <p className="text-gray-400 text-xs uppercase tracking-wider font-bold">Case {i + 1}</p>
                                  <div className="grid grid-cols-1 gap-1">
                                     <div className="text-gray-500">Input:</div>
                                     <div className="bg-dark-bg p-2 rounded font-mono text-gray-300">{r.input}</div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                     <div>
                                       <div className="text-gray-500">Output:</div>
                                       <div className={`bg-dark-bg p-2 rounded font-mono ${r.passed ? 'text-green-400' : 'text-red-400'}`}>{r.actual}</div>
                                     </div>
                                     <div>
                                       <div className="text-gray-500">Expected:</div>
                                       <div className="bg-dark-bg p-2 rounded font-mono text-gray-300">{r.expected}</div>
                                     </div>
                                  </div>
                               </div>
                            ))}
                         </div>
                      </div>
                    )}
                </div>
              )}
          </div>
        </div>
      </div>
      </div>
    </ProtectedRoute>
  );
};

