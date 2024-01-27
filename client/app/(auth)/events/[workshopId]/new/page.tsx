import { EventForm } from './_components/eventForm';
import { Suspense } from 'react';
import { Spinner } from '../../../../../components/ui/Spinner';

export default async function NewEvent({ params }: { params: { workshopId: string } }) {
  return (
    <Suspense fallback={<Spinner dark />}>
      <EventForm workshopId={params.workshopId} />
    </Suspense>
  );
}
