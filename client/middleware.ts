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
    if (!isValid.hasValidToken) return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.log('error', error);
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = { matcher: ['/home', '/members', '/workshop', '/events'] };
