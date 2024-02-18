import NextLink from 'next/link'
import type { FC, ReactNode } from 'react'

type ButtonLinkProps = { href: string; children: ReactNode }

export const ButtonLink: FC<ButtonLinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} className='inline-flex rounded-md border-2 border-middle p-2 transition-all hover:bg-accent hover:text-dark'>
      {children}
    </NextLink>
  )
}
