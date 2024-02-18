import type { ReactNode } from 'react'
import { WithTitleWrapper } from '../../../components/layout/WithTitleWrapper'

export default function PageLayout({ children }: { children: ReactNode }) {
  return <WithTitleWrapper title='ホーム'>{children}</WithTitleWrapper>
}
