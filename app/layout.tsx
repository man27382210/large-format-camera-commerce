import { CartProvider } from '@/components/cart/CartContext';
import OpenCart from '@/components/cart/OpenCart';
import LoginButton from '@/components/LoginButton';
import Provider from '@/components/SessionProvider';
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: '大片幅攝影教學與銷售平台',
  description: '一個專注於大片幅攝影藝術與技術的線上殿堂'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen antialiased">
        <Provider>
          <CartProvider>
            <header className="sticky top-0 z-40 w-full border-b bg-white">
              <div className="container mx-auto flex h-16 items-center justify-between">
                <div className="flex items-center space-x-6">
                  <Link href="/">
                    <div className="font-bold">Home</div>
                  </Link>
                  <Link href="/products">
                    <div className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                      Cameras
                    </div>
                  </Link>
                  <Link href="/courses">
                    <div className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                      Courses
                    </div>
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <LoginButton />
                  <OpenCart />
                </div>
              </div>
            </header>
            {children}
          </CartProvider>
        </Provider>
      </body>
    </html>
  );
}
