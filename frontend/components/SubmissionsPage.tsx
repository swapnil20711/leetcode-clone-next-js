'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Submission, Difficulty } from '@/types';
import { CheckCircle, XCircle, AlertTriangle, ChevronDown, ChevronUp, Code2, Calendar, FileText } from 'lucide-react';
import { Navbar } from './Navbar';
import { ProtectedRoute } from './ProtectedRoute';

interface SubmissionsPageProps {
  problemId?: string;
  limit?: number;
  hideNavbar?: boolean;
}

export const SubmissionsPage: React.FC<SubmissionsPageProps> = ({ problemId, limit, hideNavbar = false }) => {
  const { token, isAuthenticated } = useAuth();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

  useEffect(() => {
    if (!isAuthenticated || !token) {
      setLoading(false);
      return;
    }

    const fetchSubmissions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const url = problemId 
          ? `${API_URL}/api/submissions/problem/${problemId}`
          : `${API_URL}/api/submissions/me`;
        
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch submissions');
        }

        const data = await response.json();
        const subs = limit ? data.submissions.slice(0, limit) : data.submissions;
        setSubmissions(subs);
      } catch (err: any) {
        setError(err.message || 'Failed to load submissions');
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [token, isAuthenticated, problemId, limit, API_URL]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Accepted':
        return <CheckCircle size={18} className="text-green-500" />;
      case 'Wrong Answer':
        return <XCircle size={18} className="text-red-500" />;
      case 'Runtime Error':
      case 'Compilation Error':
        return <AlertTriangle size={18} className="text-yellow-500" />;
      default:
        return <AlertTriangle size={18} className="text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Accepted':
        return 'text-green-500 bg-green-500/10 border-green-500/30';
      case 'Wrong Answer':
        return 'text-red-500 bg-red-500/10 border-red-500/30';
      case 'Runtime Error':
      case 'Compilation Error':
        return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30';
      default:
        return 'text-gray-500 bg-gray-500/10 border-gray-500/30';
    }
  };

  const getDifficultyColor = (diff: Difficulty) => {
    switch (diff) {
      case 'Easy': return 'text-green-500';
      case 'Medium': return 'text-yellow-500';
      case 'Hard': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getLanguageBadge = (lang: string) => {
    const colors: Record<string, string> = {
      javascript: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      python: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      java: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      cpp: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    };
    
    return colors[lang.toLowerCase()] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return (
      <div className={`${hideNavbar ? '' : 'min-h-screen'} bg-dark-bg text-gray-100 flex flex-col`}>
        {!hideNavbar && <Navbar />}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange mx-auto mb-4"></div>
            <p className="text-gray-400">Loading submissions...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${hideNavbar ? '' : 'min-h-screen'} bg-dark-bg text-gray-100 flex flex-col`}>
        {!hideNavbar && <Navbar />}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <p className="text-gray-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  const problemTitle = (submission: Submission) => {
    if (typeof submission.problemId === 'object' && submission.problemId !== null) {
      return submission.problemId.title;
    }
    return 'Unknown Problem';
  };

  const problemSlug = (submission: Submission) => {
    if (typeof submission.problemId === 'object' && submission.problemId !== null) {
      return submission.problemId.slug;
    }
    return '';
  };

  const problemDifficulty = (submission: Submission): Difficulty | null => {
    if (typeof submission.problemId === 'object' && submission.problemId !== null) {
      return submission.problemId.difficulty;
    }
    return null;
  };

  return (
    <div className={`${hideNavbar ? '' : 'min-h-screen'} bg-dark-bg text-gray-100 flex flex-col`}>
      {!hideNavbar && <Navbar />}
      <div className={`flex-1 ${hideNavbar ? 'p-4' : 'p-8'}`}>
        <div className={`${hideNavbar ? '' : 'max-w-6xl mx-auto'}`}>
          {!problemId && !hideNavbar && (
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">My Submissions</h1>
              <p className="text-gray-400">View all your code submissions and their results.</p>
            </div>
          )}

          {submissions.length === 0 ? (
            <div className={`${hideNavbar ? 'bg-transparent' : 'bg-dark-layer rounded-xl shadow-lg border border-white/5'} ${hideNavbar ? 'p-4' : 'p-12'} text-center`}>
              <FileText className={`${hideNavbar ? 'h-8 w-8' : 'h-16 w-16'} text-gray-600 mx-auto mb-4`} />
              <p className={`${hideNavbar ? 'text-sm' : 'text-lg'} text-gray-400 mb-2`}>No submissions yet</p>
              <p className={`text-gray-500 ${hideNavbar ? 'text-xs' : 'text-sm'}`}>
                {problemId 
                  ? "You haven't submitted any solutions for this problem yet."
                  : "Start solving problems to see your submissions here."}
              </p>
            </div>
          ) : (
            <div className={`${hideNavbar ? 'bg-transparent' : 'bg-dark-layer rounded-xl shadow-lg border border-white/5'} overflow-hidden`}>
              <div className="divide-y divide-white/5">
                {submissions.map((submission) => {
                  const submissionId = submission._id || submission.id || '';
                  const isExpanded = expandedId === submissionId;
                  
                  return (
                    <div key={submissionId} className="hover:bg-white/5 transition-colors">
                      <div 
                        className="p-4 cursor-pointer"
                        onClick={() => toggleExpand(submissionId)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 flex-1 min-w-0">
                            <div className="flex-shrink-0">
                              {getStatusIcon(submission.result.status)}
                            </div>
                            
                            {!problemId && (
                              <div className="flex-1 min-w-0">
                                <Link
                                  href={`/problems/${problemSlug(submission)}`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-white hover:text-brand-orange font-medium truncate block"
                                >
                                  {problemTitle(submission)}
                                </Link>
                                {problemDifficulty(submission) && (
                                  <span className={`text-xs ${getDifficultyColor(problemDifficulty(submission)!)}`}>
                                    {problemDifficulty(submission)}
                                  </span>
                                )}
                              </div>
                            )}
                            
                            <div className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(submission.result.status)}`}>
                              {submission.result.status}
                            </div>
                            
                            <div className={`px-2 py-1 rounded text-xs font-medium border ${getLanguageBadge(submission.language)}`}>
                              {submission.language.toUpperCase()}
                            </div>
                            
                            <div className="flex items-center space-x-1 text-gray-400 text-sm">
                              <Calendar size={14} />
                              <span>{formatDate(submission.createdAt)}</span>
                            </div>
                            
                            {submission.result.passedTests !== undefined && submission.result.totalTests !== undefined && (
                              <div className="text-gray-400 text-sm">
                                {submission.result.passedTests}/{submission.result.totalTests} tests passed
                              </div>
                            )}
                          </div>
                          
                          <button className="ml-4 p-1 hover:bg-white/10 rounded transition-colors">
                            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </button>
                        </div>
                      </div>
                      
                      {isExpanded && (
                        <div className="px-4 pb-4 space-y-4 border-t border-white/5 pt-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Code2 size={16} className="text-gray-400" />
                              <h3 className="text-sm font-medium text-gray-300">Code</h3>
                            </div>
                            <div className="bg-dark-bg rounded-lg p-4 overflow-x-auto">
                              <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
                                {submission.code}
                              </pre>
                            </div>
                          </div>
                          
                          {submission.result.results && submission.result.results.length > 0 && (
                            <div>
                              <h3 className="text-sm font-medium text-gray-300 mb-2">Test Results</h3>
                              <div className="space-y-2">
                                {submission.result.results.map((test, idx) => (
                                  <div key={idx} className="bg-dark-bg rounded-lg p-3 space-y-2 text-sm">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">
                                        Test Case {idx + 1}
                                      </span>
                                      {test.passed ? (
                                        <CheckCircle size={14} className="text-green-500" />
                                      ) : (
                                        <XCircle size={14} className="text-red-500" />
                                      )}
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                      <div>
                                        <div className="text-gray-500 text-xs mb-1">Input:</div>
                                        <div className="bg-dark-layer p-2 rounded font-mono text-gray-300 text-xs">
                                          {test.input}
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <div>
                                          <div className="text-gray-500 text-xs mb-1">Output:</div>
                                          <div className={`bg-dark-layer p-2 rounded font-mono text-xs ${
                                            test.passed ? 'text-green-400' : 'text-red-400'
                                          }`}>
                                            {test.actual}
                                          </div>
                                        </div>
                                        <div>
                                          <div className="text-gray-500 text-xs mb-1">Expected:</div>
                                          <div className="bg-dark-layer p-2 rounded font-mono text-gray-300 text-xs">
                                            {test.expected}
                                          </div>
                                        </div>
                                      </div>
                                      {test.logs && (
                                        <div>
                                          <div className="text-gray-500 text-xs mb-1">Logs:</div>
                                          <div className="bg-dark-layer p-2 rounded font-mono text-gray-400 text-xs">
                                            {test.logs}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {submission.result.error && (
                            <div>
                              <h3 className="text-sm font-medium text-red-400 mb-2">Error</h3>
                              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                                <pre className="text-sm text-red-400 font-mono whitespace-pre-wrap">
                                  {submission.result.error}
                                </pre>
                              </div>
                            </div>
                          )}
                          
                          {submission.result.runtime && (
                            <div className="text-sm text-gray-400">
                              Runtime: {submission.result.runtime}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

