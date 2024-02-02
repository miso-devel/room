import { FC, Suspense } from 'react';
import { EventEditForm } from './components/eventEditForm';
import { Spinner } from '../../../../../components/ui/Spinner';
import { fetcher } from '../../../../../util/fetcher';
import { schema } from '../../../../../types/common';

type TEventShowPageWrap = FC<{ eventId: string }>;
export const EventShowPageWrap: TEventShowPageWrap = async ({ eventId }) => {
  const event = await fetcher.get<schema['Event']>(`/events/${eventId}`);
  return <EventEditForm event={event} />;
};

export default function EventsShowPage({ params }: { params: { eventId: string } }) {
  return (
    <Suspense fallback={<Spinner dark />}>
      <EventShowPageWrap eventId={params.eventId} />
    </Suspense>
  );
}
