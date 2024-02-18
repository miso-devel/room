import { WithTitleWrapper } from '@/components/layout/WithTitleWrapper'
import type { ReactNode } from 'react'

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className='mx-auto w-[60%]'>
      <WithTitleWrapper title='新しいイベントを作成する'>{children}</WithTitleWrapper>
    </div>
  )
}
