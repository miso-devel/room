import { WithTitleWrapper } from '@/components/layout/WithTitleWrapper'
import { SvgLink } from '@/components/ui/Link/SvgLink'
import type { ReactNode } from 'react'

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <WithTitleWrapper
      title='勉強会一覧'
      additionalElms={<SvgLink href='/workshops/new' ariaLabel='勉強会作成' svgName='add' svgAlt='勉強会作成ボタン' />}
    >
      {children}
    </WithTitleWrapper>
  )
}
