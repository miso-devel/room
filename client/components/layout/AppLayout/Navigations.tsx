'use client'
import { PATHS } from '@/constants/paths'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

export const Navigations: FC = () => {
  const pathname = usePathname()
  return (
    <>
      {PATHS.map(path => (
        <Link
          key={path.name}
          href={path.name ?? ''}
          className={`rounded-md p-2 transition-all ${pathname === path.name ? 'bg-accent text-dark' : 'hover:bg-primary'}`}
        >
          {path.text}
        </Link>
      ))}
    </>
  )
}
