import { FC } from 'react';
import Link from 'next/link';

export const Logo: FC = () => {
  return (
    <Link href="/" className="my-10 ms-2 text-2xl font-extrabold hover:opacity-70">
      Doer
    </Link>
  );
};
