import { components } from '@/types/schema';
import { EventForm } from './_components/eventForm';
import { Workshop } from './_components/workshop/page';

export default async function NewEvent({ params }: { params: { workshopId: string } }) {
  const workshop: components['schemas']['Workshop'] = await fetch(
    `${process.env.SERVER_URL}/workshops/${params.workshopId}`
  ).then((data) => data.json());

  const members: components['schemas']['User'][] = await fetch(`${process.env.SERVER_URL}/members`).then((data) =>
    data.json()
  );

  return (
    <div className="prose max-w-full">
      <h1>Event new</h1>
      <Workshop workshop={workshop} />
      <EventForm members={members} workshop={workshop} />
    </div>
  );
}
