'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useProblems } from '@/context/ProblemContext';
import { useSubmission } from '@/context/SubmissionsContext';
import { CheckCircle2, Circle, ChevronRight, Search } from 'lucide-react';
import { Difficulty } from '@/types';
import { Navbar } from './Navbar';

export const ProblemListPage: React.FC = () => {
  const { problems } = useProblems();
  const { solvedProblemIds } = useSubmission();

  const [filter, setFilter] = useState('');

  const filteredProblems = problems.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase()) ||
    p.difficulty.toLowerCase().includes(filter.toLowerCase()) ||
    p.description.toLowerCase().includes(filter.toLowerCase())
  );
  const getDifficultyColor = (diff: Difficulty) => {
    switch (diff) {
      case 'Easy': return 'text-green-500';
      case 'Medium': return 'text-yellow-500';
      case 'Hard': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">

          {/* Search + Heading */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Problem Set</h1>
              <p className="text-gray-400">Sharpen your skills with AI-judged challenges.</p>
            </div>
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-10 pr-4 py-2 bg-dark-layer border border-white/10 rounded-lg 
                           focus:ring-2 focus:ring-brand-orange focus:border-transparent 
                           text-white placeholder-gray-500 outline-none"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-dark-layer rounded-xl shadow-lg border border-white/5 overflow-hidden">

            <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-gray-400 font-medium text-sm bg-white/5">
              <div className="col-span-1">Status</div>
              <div className="col-span-7">Title</div>
              <div className="col-span-2">Difficulty</div>
              <div className="col-span-2">Solution</div>
            </div>

            <div className="divide-y divide-white/5">
              {filteredProblems.map((problem) => (
                <div key={problem.id} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors group">
                  <div className="col-span-1">
                    {solvedProblemIds.some(item => item._id === problem.id) ? (
                      <CheckCircle2 size={18} className="text-green-500" />
                    ) : (
                      <Circle size={18} className="text-gray-600" />
                    )}
                  </div>

                  <div className="col-span-7">
                    <Link href={`/problems/${problem.slug}`} className="text-white hover:text-brand-orange font-medium truncate block">
                      {problem.title}
                    </Link>
                  </div>

                  <div className={`col-span-2 font-medium ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </div>

                  <div className="col-span-2 text-gray-500 text-sm flex items-center">
                    <Link href={`/problems/${problem.slug}`} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}

              {filteredProblems.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  No problems found matching "{filter}"
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
