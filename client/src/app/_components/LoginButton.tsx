'use client';
import { signIn } from 'next-auth/react';

export const LoginButton = async () => {
  return (
    <button onClick={() => signIn()} className="btn btn-outline btn-secondary">
      Login with Discord
    </button>
  );
};
