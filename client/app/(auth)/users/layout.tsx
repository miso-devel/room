import type { ReactNode } from 'react'
import { WithTitleWrapper } from '../../../components/layout/WithTitleWrapper'

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <WithTitleWrapper title='ユーザー一覧'>
      <p className='mb-5'>一旦ユーザー一覧とかは取れなくてもいい気がするので実装はしていない</p>
      {children}
    </WithTitleWrapper>
  )
}
