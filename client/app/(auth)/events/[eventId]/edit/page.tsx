import { Spinner } from '@/components/ui/Spinner'
import type { Schema } from '@/types/common'
import { fetcher } from '@/util/fetcher'
import { type FC, Suspense } from 'react'
import { EventEditForm } from './components/eventEditForm'

export const EventShowPageWrap: FC<{ eventId: string }> = async ({ eventId }) => {
  const event = await fetcher.get<Schema['Event']>(`/events/${eventId}`)
  return <EventEditForm event={event} />
}

export default function EventsShowPage({ params }: { params: { eventId: string } }) {
  return (
    <Suspense fallback={<Spinner dark />}>
      <EventShowPageWrap eventId={params.eventId} />
    </Suspense>
  )
}
