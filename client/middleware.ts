import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { fetcher } from './util/fetcher';

export async function middleware(request: NextRequest) {
  try {
    const isValid = await fetcher.get<{ hasValidToken: boolean }>('/auth/token/check', {
      credentials: 'include',
      cache: 'no-cache',
      headers: request.headers,
    });
    console.log('isValid', isValid);
    if (!isValid.hasValidToken) return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.log('error', error);
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = { matcher: ['/home', '/members', '/workshop', '/events'] };

// import { withAuth } from 'next-auth/middleware';

// // More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
// export default withAuth({
//   callbacks: {
//     authorized({ req, token }) {
//       if (req.nextUrl.pathname !== '/') return !!token;
//       return false;
//     },
//   },
// });
