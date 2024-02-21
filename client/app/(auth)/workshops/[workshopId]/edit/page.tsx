import { Spinner } from '@/components/ui/Spinner'
import type { Schema } from '@/types/common'
import { fetcher } from '@/util/fetcher'
import { type FC, Suspense } from 'react'
import { WorkshopEditForm } from './components/workshopEditForm'

const WorkshopShowPageWrap: FC<{ workshopId: string }> = async ({ workshopId }) => {
  const workshop = await fetcher.get<Schema['Workshop']>(`/workshops/${workshopId}`)
  return <WorkshopEditForm workshop={workshop} />
}

export default function WorkshopsShowPage({ params }: { params: { workshopId: string } }) {
  return (
    <Suspense fallback={<Spinner dark />}>
      <WorkshopShowPageWrap workshopId={params.workshopId} />
    </Suspense>
  )
}
