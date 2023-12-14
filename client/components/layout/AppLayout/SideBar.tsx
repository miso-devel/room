import { FC } from 'react';
import { NavLinks } from './NavLinks';

const AppTitle = () => {
  return (
    <span className="p-2 text-2xl mb-5 mt-10">
      <a href="/" className="hover:opacity-80">
        Doer
      </a>
    </span>
  );
};

export const SideBar: FC = () => {
  return (
    <div className="w-[15%] h-screen px-5 bg-secondary flex flex-col shadow-inner rounded-r-3xl gap-1 sticky top-0">
      <AppTitle />
      <NavLinks />
    </div>
  );
};
