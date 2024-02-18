import { WithTitleWrapper } from '@/components/layout/WithTitleWrapper'
import type { Schema } from '@/types/common'
import type { FC, ReactNode } from 'react'

type WorkshopInfo = FC<{ event: Schema['Event']; children: ReactNode }>

export const EventEditPageTitle: WorkshopInfo = ({ event, children }) => {
  return <WithTitleWrapper title={`編集中：${event.theme}`}>{children}</WithTitleWrapper>
}
