import { schema } from '../../../../types/common';
import { fetcher } from '../../../../util/fetcher';
import { ContentBox } from '../../../../components/ui/Content/Box';

export default async function EventsPage() {
  const events = await fetcher.get<schema['Event'][]>('/events', { cache: 'no-cache' });
  return (
    <>
      <div className="grid grid-cols-1 gap-3">
        {events.map((event) => {
          return <ContentBox key={event.id} title={event.theme} to={`/workshops/${event.workshopId}`} />;
        })}
      </div>
    </>
  );
}
