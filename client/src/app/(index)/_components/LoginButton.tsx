'use client';
import { signIn } from 'next-auth/react';

export const LoginButton = async () => {
  return (
    <button
      onClick={() => signIn('discord', { callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/home` })}
      className=" rounded-md hover:bg-white hover:text-black transition-all p-2 my-5"
    >
      Login with Discord
    </button>
  );
};
