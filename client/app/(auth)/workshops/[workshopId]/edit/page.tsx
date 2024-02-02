import { FC, Suspense } from 'react';
import { WorkshopEditForm } from './components/workshopEditForm';
import { Spinner } from '../../../../../components/ui/Spinner';
import { fetcher } from '../../../../../util/fetcher';
import { schema } from '../../../../../types/common';

export const WorkshopShowPageWrap: FC<{ workshopId: string }> = async ({ workshopId }) => {
  const workshop = await fetcher.get<schema['Workshop']>(`/workshops/${workshopId}`);
  return <WorkshopEditForm workshop={workshop} />;
};

export default function WorkshopsShowPage({ params }: { params: { workshopId: string } }) {
  return (
    <Suspense fallback={<Spinner dark />}>
      <WorkshopShowPageWrap workshopId={params.workshopId} />
    </Suspense>
  );
}
