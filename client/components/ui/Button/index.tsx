import { FC, ReactNode } from 'react';

type TButtonProps = { children: ReactNode; onClick?: () => void; onDark?: boolean; sm?: boolean; disable?: boolean };

export const Button: FC<TButtonProps> = ({ children, onClick, onDark, sm, disable }) => {
  return (
    <button
      onClick={onClick}
      className={`${onDark ? 'border-bright hover:border-transparent hover:text-dark' : 'hover:border-dark'} ${
        sm ? 'border p-1 text-sm' : 'border-2 p-2 text-base'
      } rounded-md transition-all hover:bg-accent`}
      disabled={disable}
    >
      {children}
    </button>
  );
};
