import { FC } from 'react';
import { UserImage } from '../UserImage';

type TUserProfileProps = { name: string; avatarPath: string };

export const UserProfile: FC<TUserProfileProps> = ({ name, avatarPath }) => {
  return (
    <div className="flex items-center gap-2">
      <UserImage name={name} avatarPath={avatarPath} />
      <p className="text-sm">{name}</p>
    </div>
  );
};
