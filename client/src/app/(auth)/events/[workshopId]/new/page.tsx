import { EventForm } from './_components/eventForm';
import { Workshop } from './_components/workshop';
import { schema } from '@/types/common';

export default async function NewEvent({ params }: { params: { workshopId: string } }) {
  const workshop: schema['Workshop'] = await fetch(`${process.env.SERVER_URL}/workshops/${params.workshopId}`, {
    cache: 'no-cache',
  }).then((data) => data.json());

  const members: schema['User'][] = await fetch(`${process.env.SERVER_URL}/members`).then((data) => data.json());

  return (
    <div className="w-[60%] mx-auto">
      <h1 className="text-3xl">新しいイベントを作成する</h1>
      <Workshop workshop={workshop} />
      <EventForm members={members} workshop={workshop} />
    </div>
  );
}
