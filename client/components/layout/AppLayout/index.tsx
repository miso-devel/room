import { Session } from 'next-auth';
import { FC, ReactNode } from 'react';
import { SideBar } from './SideBar';

type AppLayoutProps = { children: ReactNode; session: Session };

export const AppLayout: FC<AppLayoutProps> = ({ children, session }) => {
  return (
    <div className="flex min-h-screen w-screen text-dark">
      <SideBar />
      <div className="m-10 w-[85%]">{children}</div>
    </div>
  );
};
