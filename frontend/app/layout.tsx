import type { Metadata } from 'next'
import './globals.css'
import { ProblemProvider } from '@/context/ProblemContext'
import { AuthProvider } from '@/context/AuthContext'
import 'prismjs/themes/prism-tomorrow.css'
import { SubmissionProvider } from '@/context/SubmissionsContext'

export const metadata: Metadata = {
  title: 'AI LeetCode',
  description: 'A comprehensive coding platform clone where users can browse algorithmic problems, solve them in multiple languages with an AI-powered code judge, and create their own custom challenges.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <AuthProvider>
          <ProblemProvider>
            <SubmissionProvider>
            {children}
            </SubmissionProvider>
          </ProblemProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
