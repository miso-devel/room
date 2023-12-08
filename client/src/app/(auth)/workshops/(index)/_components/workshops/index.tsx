import { schema } from '@/types/common';
import { FC } from 'react';

type TProps = { workshops: schema['Workshop'][] };

export const Workshops: FC<TProps> = async ({ workshops }) => {
  const events: schema['Event'] = await fetch(`${process.env.SERVER_URL}/events`, {
    cache: 'no-cache',
  }).then(async (data) => await data.json());
  console.log(events);
  return (
    <div className="grid grid-cols-3 gap-5 my-5">
      {workshops.map((workshop) => {
        return (
          <div key={workshop.id}>
            <a key={workshop.id} className="p-3" href={`/workshops/${workshop.id}`}>
              <h2 className="text-xl mb-2">{workshop.title}</h2>
              <p className="text-xs">{workshop.description}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};
