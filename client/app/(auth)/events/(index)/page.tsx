import Link from 'next/link';
import { schema } from '../../../../types/common';
import { fetcher } from '../../../../util/fetcher';

export default async function EventsPage() {
  const events = await fetcher.get<schema['Event'][]>('/events', { cache: 'no-cache' });
  return (
    <>
      <div className="grid grid-cols-1 gap-3">
        {events.map((event) => {
          return (
            <Link
              key={event.id}
              href={`/workshops/${event.workshopId}`}
              className="border-b-2 py-2 transition-all hover:border-b-primary"
            >
              <h2 className="mb-2 text-xl">{event.theme}</h2>
              {/* <p>event</p> */}
            </Link>
          );
        })}
      </div>
    </>
  );
}
