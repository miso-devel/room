'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../../../components/ui/Button';

import { fetcher } from '../../../util/fetcher';

export const LoginButton = async () => {
  const router = useRouter();
  const signIn = async () => {
    const res: { redirectUrl: string } = await fetcher.get('/auth/signin');
    router.push(res.redirectUrl);
  };
  return (
    <Button onClick={signIn} onDark>
      Login with Discord
    </Button>
  );
};
