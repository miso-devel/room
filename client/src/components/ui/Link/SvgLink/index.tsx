import { FC, ReactNode } from 'react';
import NextLink from 'next/link';

type TSvgLinkProps = { href: string; children: ReactNode; ariaLabel: string };

export const SvgLink: FC<TSvgLinkProps> = ({ href, children, ariaLabel }) => {
  return (
    <NextLink href={href} aria-label={ariaLabel}>
      {children}
    </NextLink>
  );
};
