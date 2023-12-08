'use client';
import { Button } from '@/components/ui/Button';
import { signIn } from 'next-auth/react';

export const LoginButton = async () => {
  return (
    <Button onClick={() => signIn('discord', { callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/home` })} onDark>
      Login with Discord
    </Button>
  );
};
