import { Suspense } from 'react'
import { Spinner } from '../../../components/ui/Spinner'
import { Workshops } from './components/workshops'

export default function Home() {
  return (
    <Suspense fallback={<Spinner dark />}>
      <Workshops />
    </Suspense>
  )
}
