import { Spinner } from '@/components/ui/Spinner'
import { Suspense } from 'react'
import { Events } from './components/events'

export default function EventsPage() {
  return (
    <Suspense fallback={<Spinner dark={true} />}>
      <Events />
    </Suspense>
  )
}
