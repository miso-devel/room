import { schema } from '../../../../../../types/common';
import { FC } from 'react';
import { fetcher } from '../../../../../../util/fetcher';

type TProps = { workshops: schema['Workshop'][] };

export const Workshops: FC<TProps> = async ({ workshops }) => {
  const events = await fetcher<schema['Event'][]>('/events');

  return (
    <div className="grid grid-cols-3 gap-5">
      {workshops.map((workshop) => {
        return (
          <div key={workshop.id} className="rounded-md border-2 border-middle p-2">
            <a className="p-3" href={`/workshops/${workshop.id}`}>
              <h2 className="mb-2 text-xl">{workshop.title}</h2>
              <p className="text-xs">{workshop.description}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};
