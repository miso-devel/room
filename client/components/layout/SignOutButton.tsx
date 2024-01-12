'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { fetcher } from '../../util/fetcher';

export const LogoutButton = async () => {
  const router = useRouter();
  const signout = async () => {
    const data: { revoked: boolean } = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/auth/signout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      credentials: 'include',
    }).then((res) => res.json());
    router.push(data.revoked ? '/' : '/home');
  };
  return (
    <Button onClick={signout} onDark>
      Logout
    </Button>
  );
};
