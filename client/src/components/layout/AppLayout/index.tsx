import { Session } from 'next-auth';
import { FC, ReactNode } from 'react';
import { PageContent } from './PageContent';
import { SideBar } from './SideBar';

type AppLayoutProps = { children: ReactNode; session: Session };

export const AppLayout: FC<AppLayoutProps> = ({ children, session }) => {
  return (
    <div className="bg-primary w-screen min-h-screen flex">
      <SideBar />
      <PageContent>{children}</PageContent>
    </div>
  );
};
