'use client';
import { signIn } from 'next-auth/react';

export const LoginButton = async () => {
  return (
    <button
      onClick={() => signIn('discord', { callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/home` })}
      className="btn btn-outline btn-secondary"
    >
      Login with Discord
    </button>
  );
};
