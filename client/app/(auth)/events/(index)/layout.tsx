import { WithTitleWrapper } from '@/components/layout/WithTitleWrapper'
import type { ReactNode } from 'react'

export default function PageLayout({ children }: { children: ReactNode }) {
  return <WithTitleWrapper title='イベント一覧'>{children}</WithTitleWrapper>
}
