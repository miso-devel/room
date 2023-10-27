import { components } from '@/types/schema';
import { EventForm } from './_components/eventForm';

type TMember = components['schemas']['User'][];

export default async function NewWorkshop() {
  const members: TMember = await fetch(`${process.env.SERVER_URL}/members`).then(async (data) => data.json());

  return (
    <div className="prose max-w-full">
      <h1>workshop new</h1>
      <EventForm members={members} />
    </div>
  );
}
