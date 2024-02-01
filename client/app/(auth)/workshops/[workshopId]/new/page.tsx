import { EventForm } from './_components/eventForm';
import { FC, Suspense } from 'react';
import { Spinner } from '../../../../../components/ui/Spinner';
import { fetcher } from '../../../../../util/fetcher';
import { schema } from '../../../../../types/common';

const NewEventWrap: FC<{ workshopId: string }> = async ({ workshopId }) => {
  const workshop = await fetcher.get<schema['Workshop']>(`/workshops/${workshopId}`);
  const users = await fetcher.get<schema['User'][]>('/users');
  return <EventForm workshop={workshop} users={users} />;
};

export default async function NewEvent({ params }: { params: { workshopId: string } }) {
  return (
    <Suspense fallback={<Spinner dark />}>
      <NewEventWrap workshopId={params.workshopId} />
    </Suspense>
  );
}
