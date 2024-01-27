import { FC, ReactNode } from 'react';

type TContentsWrapper = FC<{ children: ReactNode }>;

export const ContentsWrapper: TContentsWrapper = ({ children }) => {
  return <div className="grid grid-cols-1 gap-3">{children}</div>;
};
