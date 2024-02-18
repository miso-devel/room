import type { FC, ReactNode } from 'react'
import { SideBar } from './SideBar'

export const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <SideBar />
      <main className='ms-[15%] w-[85%] p-10'>{children}</main>
    </>
  )
}
