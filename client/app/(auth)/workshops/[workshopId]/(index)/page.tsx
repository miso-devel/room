import { schema } from '../../../../../types/common';
import { EventsInfo } from './_components/EventsInfo';
import { fetcher } from '../../../../../util/fetcher';
import { WorkshopPageTitle } from './_components/WorkshopPageTitle';

export default async function WorkshopsShowPage({ params }: { params: { workshopId: string } }) {
  const workshop = await fetcher.get<schema['Workshop']>(`/workshops/${params.workshopId}`, { cache: 'no-cache' });
  const events = await fetcher.get<schema['Event'][]>(`/events?workshopId=${params.workshopId}`);

  return (
    <>
      <WorkshopPageTitle workshop={workshop} />
      <EventsInfo events={events} workshopId={workshop.id} />
    </>
  );
}
