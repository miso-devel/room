import { EventForm } from './_components/eventForm';
import { Workshop } from './_components/workshop';
import { schema } from '../../../../../types/common';
import { fetcher } from '../../../../../util/fetcher';
import { WithTitleWrapper } from '../../../../../components/layout/WithTitleWrapper';

export default async function NewEvent({ params }: { params: { workshopId: string } }) {
  const workshop = await fetcher<schema['Workshop']>(`/workshops/${params.workshopId}`);
  const members = await fetcher<schema['User'][]>('/members');

  return (
    <>
      <Workshop workshop={workshop} />
      <EventForm members={members} workshop={workshop} />
    </>
  );
}
