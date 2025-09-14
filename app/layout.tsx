import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Provider from '@/components/SessionProvider';
import LoginButton from '@/components/LoginButton';

export const metadata: Metadata = {
  title: '大片幅攝影教學與銷售平台',
  description: '一個專注於大片幅攝影藝術與技術的線上殿堂'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen antialiased">
        <Provider>
          <header className="sticky top-0 z-40 w-full border-b bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between">
              <Link href="/">
                <div className="font-bold">Home</div>
              </Link>
              <div>
                <LoginButton />
              </div>
            </div>
          </header>
          {children}
        </Provider>
      </body>
    </html>
  );
}
