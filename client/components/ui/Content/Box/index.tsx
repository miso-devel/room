import Link from 'next/link';
import { FC } from 'react';

type TContentBox = FC<{
  title: string;
  to: string;
  additionalInfo?: React.ReactNode;
}>;

export const ContentBox: TContentBox = ({ title, to, additionalInfo }) => {
  return (
    <Link href={to} className="border-b-2 py-2 transition-all hover:border-b-primary hover:opacity-80">
      <h2 className="mb-2 text-xl">{title}</h2>
      <p className="text-sm">{additionalInfo}</p>
    </Link>
  );
};
