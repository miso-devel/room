'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../../../components/ui/Button';

export const LoginButton = async () => {
  const router = useRouter();
  const signIn = async () => {
    const res: { redirectUrl: string } = await fetch('/auth/signin').then((res) => res.json());
    router.push(res.redirectUrl);
  };
  return (
    <Button onClick={signIn} onDark>
      Login with Discord
    </Button>
  );
};
