import { WithTitleWrapper } from '@/components/layout/WithTitleWrapper'
import type { Schema } from '@/types/common'
import { fetcher } from '@/util/fetcher'
import type { FC } from 'react'
import { WorkshopDeleteButton } from '../WorkshopDeleteButton'

export const WorkshopPageTitle: FC<{ workshopId: string }> = async ({ workshopId }) => {
  const workshop = await fetcher.get<Schema['Workshop']>(`/workshops/${workshopId}`, { cache: 'no-cache' })

  return (
    <WithTitleWrapper title={workshop.title} additionalElms={<WorkshopDeleteButton workshopId={workshopId} />}>
      <div className='my-3 break-all rounded-md bg-middle p-3'>
        <p>{workshop.description}</p>
      </div>
    </WithTitleWrapper>
  )
}
