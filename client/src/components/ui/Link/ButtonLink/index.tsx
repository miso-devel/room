import { FC, ReactNode } from 'react';
import NextLink from 'next/link';

type TButtonLinkProps = { href: string; children: ReactNode };

export const ButtonLink: FC<TButtonLinkProps> = ({ href, children }) => {
  return (
    <div className="">
      <NextLink
        href={href}
        className="inline-flex p-2 border-2 border-bright hover:bg-accent hover:text-dark rounded-md transition-all"
      >
        {children}
      </NextLink>
    </div>
  );
};
