import { WithTitleWrapper } from '@/components/layout/WithTitleWrapper'
import type { Schema } from '@/types/common'
import type { FC, ReactNode } from 'react'

type WorkshopInfoProps = { workshop: Schema['Workshop']; children: ReactNode }

export const WorkshopEditPageTitle: FC<WorkshopInfoProps> = ({ workshop, children }) => {
  return <WithTitleWrapper title={`編集中：${workshop.title}`}>{children}</WithTitleWrapper>
}
