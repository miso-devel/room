import type { ReactNode } from 'react'
import { WithTitleWrapper } from '../../../../components/layout/WithTitleWrapper'

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className='mx-auto w-[60%]'>
      <WithTitleWrapper title='新しい勉強会を作成する'>{children}</WithTitleWrapper>
    </div>
  )
}
