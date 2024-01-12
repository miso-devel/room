'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { fetcher } from '../../util/fetcher';

export const LogoutButton = async () => {
  const router = useRouter();
  const logout = async () => {
    const data: { revoked: boolean } = await fetch('/auth/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());
    router.push(data.revoked ? '/' : '/home');
  };
  return (
    <Button onClick={logout} onDark>
      Logout
    </Button>
  );
};
