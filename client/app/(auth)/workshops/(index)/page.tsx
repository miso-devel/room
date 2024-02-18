import { Spinner } from '@/components/ui/Spinner'
import { Suspense } from 'react'
import { Workshops } from './components/workshops'

export default function WorkshopsPage() {
  return (
    <Suspense fallback={<Spinner dark />}>
      <Workshops />
    </Suspense>
  )
}
