'use client'
import { signInGoogle, signOut } from '@/lib/auth-action'

export function ConnectForm() {
  return (
    <>
        {session?.user ? (
            <form
            action={async () => {
                'use server';
                await signOut();
            }}
            >
            <button type="submit">Sign Out</button>
            </form>
        ) : (
            <form
            action={async () => {
                'use server';
                await signInGoogle();
            }}
            >
            <button type="submit">Sign in with Google</button>
            </form>
        )}
    </>
  )
}