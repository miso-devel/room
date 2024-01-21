import { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import { SvgImage } from '../../Image/SvgImage';

type TSvgLinkProps = { href: string; children?: ReactNode; svgName: string; svgAlt: string; ariaLabel: string };

export const SvgLink: FC<TSvgLinkProps> = ({ href, children, svgName, svgAlt, ariaLabel }) => {
  return (
    <NextLink href={href} aria-label={ariaLabel}>
      {children}
      <SvgImage svgName={svgName} svgAlt={svgAlt} ariaLabel={ariaLabel} />
    </NextLink>
  );
};
