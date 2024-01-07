import { fetcher } from '../../../util/fetcher';
import { headers } from 'next/headers';
export const Profile = async () => {
  const user = await fetcher.get('/members/me', { credentials: 'include', headers: headers() });
  return <div>user</div>;
};
