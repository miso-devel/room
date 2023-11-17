import { Session } from 'next-auth';
import Image from 'next/image';
import { FC } from 'react';
import { SignOutButton } from './SignOutButton';

type TUserDropdownMenu = { session: Session };

export const UserDropdownMenu: FC<TUserDropdownMenu> = ({ session }) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image src={session?.user?.image as string} alt="me" width={50} height={50} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-md w-52 bg-secondary">
        <li>
          <a className="justify-between">{session?.user?.name ?? ''}</a>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </div>
  );
};
