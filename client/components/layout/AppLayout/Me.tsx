import { schema } from '../../../types/common';
import { fetcher } from '../../../util/fetcher';
import { LogoutButton } from '../SignOutButton';
import { UserProfile } from '../../../features/user/components/UserProfile';
import { FC, ReactNode } from 'react';

export const Me: FC = async () => {
  const user: schema['User'] = await fetcher.get('/users/me');
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
