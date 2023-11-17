import { Session } from 'next-auth';
import { Menus } from './Menus';
import { UserDropdownMenu } from './UserDropdownMenu';
import { FC } from 'react';

type TAuthedNavbar = { session: Session };

export const AuthedNavbar: FC<TAuthedNavbar> = ({ session }) => {
  return (
    <div className="navbar my-5 bg-secondary rounded-md">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Doer
        </a>
      </div>
      <div className="flex-none">
        <Menus />
        <UserDropdownMenu session={session} />
      </div>
    </div>
  );
};
