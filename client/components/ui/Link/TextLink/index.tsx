import NextLink from 'next/link'
import type { FC, ReactNode } from 'react'

type TextLinkProps = { href: string; children: ReactNode }

export const TextLink: FC<TextLinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} className='p-2 hover:text-accent'>
      {children}
    </NextLink>
  )
}
