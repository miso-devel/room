import { EventsInfo } from './_components/EventsInfo';
import { WorkshopPageTitle } from './_components/WorkshopPageTitle';
import { Suspense } from 'react';
import { Spinner } from '../../../../../components/ui/Spinner';

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
