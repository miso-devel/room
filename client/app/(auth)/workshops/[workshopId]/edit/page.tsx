import { Suspense } from 'react';
import { WorkshopEditForm } from './_components/workshopEditForm';
import { Spinner } from '../../../../../components/ui/Spinner';

export default async function WorkshopsShowPage({ params }: { params: { workshopId: string } }) {
  return (
    <Suspense fallback={<Spinner dark />}>
      <WorkshopEditForm workshopId={params.workshopId} />
    </Suspense>
  );
}
