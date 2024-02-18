import { SvgImage } from '@/components/ui/Image/SvgImage'
import NextLink from 'next/link'
import type { FC, ReactNode } from 'react'

type TvgLinkProps = { href: string; children?: ReactNode; svgName: string; svgAlt: string; ariaLabel: string }

export const SvgLink: FC<TvgLinkProps> = ({ href, children, svgName, svgAlt, ariaLabel }) => {
  return (
    <NextLink href={href} aria-label={ariaLabel}>
      {children}
      <SvgImage svgName={svgName} svgAlt={svgAlt} ariaLabel={ariaLabel} />
    </NextLink>
  )
}
