'use client';
import { signOut } from 'next-auth/react';
export const SignOutButton = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}` })}>サインアウト</button>
  );
};
