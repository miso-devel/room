import { type FC, Suspense } from 'react'
import { Spinner } from '../../ui/Spinner'
import { Logo } from './Logo'
import { Me, MeWrapper } from './Me'
import { Navigations } from './Navigations'

export const SideBar: FC = () => {
  return (
    <aside className='fixed flex h-screen w-[15%] flex-col gap-1 rounded-r-3xl bg-secondary px-5 text-bright'>
      <Logo />
      <Navigations />
      <MeWrapper>
        <Suspense fallback={<Spinner />}>
          <Me />
        </Suspense>
      </MeWrapper>
    </aside>
  )
}
