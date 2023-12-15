import { FC } from 'react';
import { Navigations } from './Navigations';
import Link from 'next/link';

export const SideBar: FC = () => {
  return (
    <div className="flex h-screen w-[15%] flex-col gap-1 rounded-r-3xl bg-secondary px-5 text-bright">
      <Link href="/" className="my-10 ms-2 text-2xl hover:opacity-70">
        Doer
      </Link>
      <Navigations />
    </div>
  );
};
