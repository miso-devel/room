import { FC, ReactNode } from 'react';

type TButtonProps = { children: ReactNode; onClick?: () => void; onDark?: boolean };

export const Button: FC<TButtonProps> = ({ children, onClick, onDark }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        onDark ? 'hover:text-dark border-bright' : 'hover:border-dark'
      } border-2 border-dark p-2 transition-all rounded-md hover:bg-accent`}
    >
      {children}
    </button>
  );
};
