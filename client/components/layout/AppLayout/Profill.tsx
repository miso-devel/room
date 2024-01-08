import Image from 'next/image';
import { schema } from '../../../types/common';
import { fetcher } from '../../../util/fetcher';
import { headers } from 'next/headers';
import { LogoutButton } from '../SignOutButton';

export const Profile = async () => {
  const user: schema['User'] = await fetcher.get('/users/me', { credentials: 'include', headers: headers() });
  return (
    <div className="mb-3 mt-auto flex items-center gap-2 p-2">
      <Image src={user.avatar} width={25} height={25} className="rounded-full" alt="" />
      <p>{user.name}</p>
      <LogoutButton />
    </div>
  );
};
