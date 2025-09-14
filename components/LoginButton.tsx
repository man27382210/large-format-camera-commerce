'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center space-x-4">
        <Link href="/profile">
          <div className="text-sm font-medium text-gray-700 hover:text-indigo-600">
            {session.user?.name || session.user?.email}
          </div>
        </Link>
        <button
          onClick={() => signOut()}
          className="rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <Link href="/login">
      <div className="rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Login
      </div>
    </Link>
  );
}
