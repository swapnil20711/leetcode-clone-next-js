'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Problem } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

interface ProblemContextType {
  problems: Problem[];
  addProblem: (problem: Problem) => Promise<void>;
  getProblemBySlug: (slug: string) => Problem | undefined;
  refreshProblems: () => Promise<void>;
}

const ProblemContext = createContext<ProblemContextType | undefined>(undefined);

export const ProblemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [problems, setProblems] = useState<Problem[]>([]);

  const refreshProblems = async () => {
    try {
      const response = await fetch(`${API_URL}/api/problems`);
      const data = await response.json();
      if (data.problems) {
        setProblems(data.problems);
      }
    } catch (error) {
      console.error('Failed to fetch problems:', error);
    }
  };

  useEffect(() => {
    refreshProblems();
  }, []);

  const addProblem = async (problem: Problem) => {
    try {
      const token = getAuthToken();
      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await fetch(`${API_URL}/api/problems`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(problem),
      });
      
      if (response.ok) {
        await refreshProblems();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to add problem');
      }
    } catch (error) {
      console.error('Failed to add problem:', error);
      throw error;
    }
  };

  const getProblemBySlug = (slug: string) => {
    return problems.find(p => p.slug === slug);
  };

  return (
    <ProblemContext.Provider value={{ problems, addProblem, getProblemBySlug, refreshProblems }}>
      {children}
    </ProblemContext.Provider>
  );
};

export const useProblems = () => {
  const context = useContext(ProblemContext);
  if (!context) {
    throw new Error('useProblems must be used within a ProblemProvider');
  }
  return context;
};
