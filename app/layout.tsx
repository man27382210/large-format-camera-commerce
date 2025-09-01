import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kunstakademie Düsseldorf — Studying',
  description:
    'Overview of studying at the Kunstakademie Düsseldorf: degree programs, facilities, quicklinks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
