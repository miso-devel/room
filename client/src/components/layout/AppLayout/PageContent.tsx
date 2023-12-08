import { FC, ReactNode } from 'react';

type TPageContent = { children: ReactNode };

export const PageContent: FC<TPageContent> = ({ children }) => {
  return <div className="w-[85%] m-10">{children}</div>;
};
