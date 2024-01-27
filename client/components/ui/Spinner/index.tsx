import { FC } from 'react';

export const Spinner: FC = () => {
  return (
    <div className="m-auto flex justify-center" aria-label="読み込み中">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
    </div>
  );
};
