import { Session } from 'next-auth';
import { FC } from 'react';
import { UserDropdownMenu } from '../UserDropdownMenu';

type AppHeaderProps = {
  session: Session;
};
export const Header: FC<AppHeaderProps> = ({ session }) => {
  return (
    <header className="h-[10%] w-[95%] bg-secondary rounded-full shadow-2xl p-3 flex items-center m-auto">
      <a href="/" className="text-2xl px-2 hover:opacity-80">
        Doer
      </a>
      <div className="ms-auto">
        <UserDropdownMenu session={session} />
      </div>
    </header>
  );
};
