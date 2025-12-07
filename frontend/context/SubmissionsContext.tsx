"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface Submission {
  id: string;
  problemId: string;
  status: string;
  createdAt: string;
}

interface SubmissionContextType {
  submissions: Submission[];
  solvedProblemIds: Problem[];
  loading: boolean;
  error: string | null;
}

interface Problem {
  _id: string;
  slug: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const SubmissionContext = createContext<SubmissionContextType>({
  submissions: [],
  solvedProblemIds: [],
  loading: false,
  error: null,
});

export const SubmissionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [solvedProblemIds, setSolvedProblemIds] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchSubs = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/submissions/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error("Failed to fetch submissions");

        const data = await res.json();

        setSubmissions(data.submissions);

        // Build solved problem IDs set
        const solved = data.submissions.map((s: Submission) => s.problemId);
        const unique:Problem[] = Array.from(
          new Map(solved.map((item:Problem) => [item._id, item])).values()
        ) as Problem[];
        setSolvedProblemIds(unique);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubs();
  }, [token, API_URL]);

  return (
    <SubmissionContext.Provider
      value={{ submissions, solvedProblemIds, loading, error }}
    >
      {children}
    </SubmissionContext.Provider>
  );
};

export const useSubmission = () => useContext(SubmissionContext);
