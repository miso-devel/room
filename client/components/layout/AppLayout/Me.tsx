import Image from 'next/image';
import { schema } from '../../../types/common';
import { fetcher } from '../../../util/fetcher';
import { headers } from 'next/headers';
import { LogoutButton } from '../SignOutButton';
import { UserProfile } from '../../../features/user/components/UserProfile';
import { FC, ReactNode, Suspense } from 'react';

export const Me: FC = async () => {
  const user: schema['User'] = await fetcher.get('/users/me', { credentials: 'include', headers: headers() });
  return (
    <>
      <UserProfile name={user.name} avatarPath={user.avatar} />
      <LogoutButton />
    </>
  );
};

type TMeWrapper = FC<{ children: ReactNode }>;
export const MeWrapper: TMeWrapper = ({ children }) => {
  return <div className="mt-5 flex gap-2 rounded-2xl bg-primary p-3">{children}</div>;
};
