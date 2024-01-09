import { FC, ReactNode } from 'react';

type TButtonProps = { children: ReactNode; onClick?: () => void; onDark?: boolean };

export const Button: FC<TButtonProps> = ({ children, onClick, onDark }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        onDark ? 'border-bright hover:border-transparent hover:text-dark' : 'hover:border-dark'
      } rounded-md border-2 p-2 transition-all hover:bg-accent`}
    >
      {children}
    </button>
  );
};
