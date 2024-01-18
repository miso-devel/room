import { EventForm } from './_components/eventForm';
import { Workshop } from './_components/workshop';
import { schema } from '../../../../../types/common';
import { fetcher } from '../../../../../util/fetcher';

export default async function NewEvent({ params }: { params: { workshopId: string } }) {
  const workshop = await fetcher.get<schema['Workshop']>(`/workshops/${params.workshopId}`);
  const members = await fetcher.get<schema['User'][]>('/users');

  return (
    <>
      <Workshop workshop={workshop} />
      <EventForm members={members} workshop={workshop} />
    </>
  );
}
