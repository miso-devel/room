import type { FC, ReactNode } from 'react'

type ContentsWrapper = FC<{ children: ReactNode }>

export const ContentsWrapper: ContentsWrapper = ({ children }) => {
  return <div className='grid grid-cols-1 gap-3'>{children}</div>
}
