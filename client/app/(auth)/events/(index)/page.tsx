import { Suspense } from 'react';
import { Spinner } from '../../../../components/ui/Spinner';
import { Events } from './components/events';

export default async function EventsPage() {
  return (
    <Suspense fallback={<Spinner dark />}>
      <Events />
    </Suspense>
  );
}
