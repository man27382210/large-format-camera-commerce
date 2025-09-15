import { auth } from './auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { nextUrl } = req;
  const user = req.auth?.user;

  const isAdmin = user?.role === 'ADMIN';
  const isTryingToAccessAdmin = nextUrl.pathname.startsWith('/admin');
  const isTryingToAccessProfile = nextUrl.pathname.startsWith('/profile');

  // Rule 1: If a non-admin tries to access any /admin route, redirect them away.
  if (isTryingToAccessAdmin && !isAdmin) {
    return NextResponse.redirect(new URL('/', nextUrl));
  }

  // Rule 2: If an admin tries to access a user profile route, redirect them to their dashboard.
  if (isTryingToAccessProfile && isAdmin) {
    return NextResponse.redirect(new URL('/admin/dashboard', nextUrl));
  }

  // If no rules match, allow the request to proceed.
  return NextResponse.next();
});

// This config specifies which routes the middleware should run on.
export const config = {
  matcher: ['/admin/:path*', '/profile/:path*']
};
