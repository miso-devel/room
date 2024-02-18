import Link from 'next/link'
import type { FC, ReactNode } from 'react'

type ContentBox = FC<{
  title: string
  to: string
  additionalInfo?: ReactNode
}>

export const ContentBox: ContentBox = ({ title, to, additionalInfo }) => {
  return (
    <Link href={to} className='border-b-2 py-2 transition-all hover:border-b-primary hover:opacity-80'>
      <h2 className='mb-2 text-xl'>{title}</h2>
      <p className='text-sm'>{additionalInfo}</p>
    </Link>
  )
}
