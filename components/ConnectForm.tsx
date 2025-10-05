'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export function ConnectForm() {
  const { data: session } = useSession()
  
  return (
    <>
        {session?.user ? (
            <button 
              onClick={() => signOut()}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Sign Out
            </button>
        ) : (
            <button 
              onClick={() => signIn('google')}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Sign in with Google
            </button>
        )}
    </>
  )
}