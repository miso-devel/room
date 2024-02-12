import { FC, ReactNode } from 'react';
import NextLink from 'next/link';

type TButtonLinkProps = { href: string; children: ReactNode };

export const ButtonLink: FC<TButtonLinkProps> = ({ href, children }) => {
  return (
    <NextLink
      href={href}
      className="inline-flex rounded-md border-2 border-middle p-2 transition-all hover:bg-accent hover:text-dark"
    >
      {children}
    </NextLink>
  );
};
