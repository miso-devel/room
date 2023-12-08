import { FC, ReactNode } from 'react';

type TButtonProps = { children: ReactNode; onClick?: () => void };

export const Button: FC<TButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-bright border-2 p-2 hover:bg-accent hover:text-dark transition-all rounded-md"
    >
      {children}
    </button>
  );
};
