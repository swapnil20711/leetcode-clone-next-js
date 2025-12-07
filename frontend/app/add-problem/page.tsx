'use client'

import { AddProblemPage } from '@/components/AddProblemPage'
import { ProtectedRoute } from '@/components/ProtectedRoute'

export default function AddProblem() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AddProblemPage />
    </ProtectedRoute>
  )
}

