import { Spinner } from '@/components/ui/Spinner'
import type { Schema } from '@/types/common'
import { fetcher } from '@/util/fetcher'
import { type FC, Suspense } from 'react'
import { EventForm } from './components/eventForm'

const NewEventWrap: FC<{ workshopId: string }> = async ({ workshopId }) => {
  const workshop = await fetcher.get<Schema['Workshop']>(`/workshops/${workshopId}`)
  const users = await fetcher.get<Schema['User'][]>('/users')
  return <EventForm workshop={workshop} users={users} />
}

export default function NewEvent({ params }: { params: { workshopId: string } }) {
  return (
    <Suspense fallback={<Spinner dark />}>
      <NewEventWrap workshopId={params.workshopId} />
    </Suspense>
  )
}
