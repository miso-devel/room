import type { FC, ReactNode } from 'react'
import { SideBar } from './SideBar'

type AppLayoutProps = { children: ReactNode }

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <SideBar />
      <main className='ms-[15%] w-[85%] p-10'>{children}</main>
    </>
  )
}
