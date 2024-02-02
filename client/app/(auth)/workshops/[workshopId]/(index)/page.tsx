import { Suspense } from 'react';
import { Spinner } from '../../../../../components/ui/Spinner';
import { WorkshopPageTitle } from './components/WorkshopPageTitle';
import { EventsInfo } from './components/EventsInfo';

export default async function WorkshopPage({ params }: { params: { workshopId: string } }) {
  return (
    <Suspense fallback={<Spinner dark />}>
      <WorkshopPageTitle workshopId={params.workshopId} />
      <Suspense fallback={<Spinner dark />}>
        <EventsInfo workshopId={params.workshopId} />
      </Suspense>
    </Suspense>
  );
}
