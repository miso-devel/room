import { Spinner } from '@/components/ui/Spinner'
import { Suspense } from 'react'
import { EventsInfo } from './components/EventsInfo'
import { WorkshopPageTitle } from './components/WorkshopPageTitle'

export default function WorkshopPage({ params }: { params: { workshopId: string } }) {
  return (
    <Suspense fallback={<Spinner dark />}>
      <WorkshopPageTitle workshopId={params.workshopId} />
      <Suspense fallback={<Spinner dark />}>
        <EventsInfo workshopId={params.workshopId} />
      </Suspense>
    </Suspense>
  )
}
