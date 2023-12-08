import { FC, ReactNode } from 'react';
import NextLink from 'next/link';

type TTextLinkProps = { href: string; children: ReactNode };

export const TextLink: FC<TTextLinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} className="p-2 hover:text-accent">
      {children}
    </NextLink>
  );
};
