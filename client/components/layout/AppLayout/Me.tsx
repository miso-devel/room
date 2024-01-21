import Image from 'next/image';
import { schema } from '../../../types/common';
import { fetcher } from '../../../util/fetcher';
import { headers } from 'next/headers';
import { LogoutButton } from '../SignOutButton';
import { UserProfile } from '../../../features/user/components/UserProfile';

export const Me = async () => {
  const user: schema['User'] = await fetcher.get('/users/me', { credentials: 'include', headers: headers() });
  return (
    <div className="mb-3 mt-auto flex items-center gap-2 p-2">
      <UserProfile name={user.name} avatarPath={user.avatar} />
      {/* TODO:Linkっぽい見た目にしたい */}
      <LogoutButton />
    </div>
  );
};
