import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "大片幅攝影教學與銷售平台",
  description: "一個專注於大片幅攝影藝術與技術的線上殿堂",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
