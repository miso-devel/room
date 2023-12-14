import { WorkshopInfo } from './_components/workshop';
import { schema } from '../../../../types/common';
import { Events } from './_components/events';

export default async function WorkshopsShowPage({ params }: { params: { workshopId: string } }) {
  const workshop: schema['Workshop'] = await fetch(`${process.env.SERVER_URL}/workshops/${params.workshopId}`).then(
    (data) => data.json()
  );

  const events: schema['Event'][] = await fetch(
    `${process.env.SERVER_URL}/events?workshopId=${params.workshopId}`
  ).then((data) => data.json());

  return (
    <>
      <WorkshopInfo workshop={workshop} />
      <Events events={events} />
    </>
  );
}
