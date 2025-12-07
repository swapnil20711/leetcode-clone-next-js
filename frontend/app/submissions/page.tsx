'use client'

import { SubmissionsPage } from '@/components/SubmissionsPage';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function Submissions() {
  return (
    <ProtectedRoute>
      <SubmissionsPage />
    </ProtectedRoute>
  );
}

