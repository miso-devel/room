import { components } from '@/types/schema';
import { FC } from 'react';

type TProps = { workshops: components['schemas']['Workshop'][] };

export const Workshops: FC<TProps> = ({ workshops }) => {
  return (
    <div className="flex flex-col gap-5">
      {workshops.map((workshop) => {
        return (
          <a
            key={workshop.id}
            className="border-2 border-secondary p-3 rounded-md no-underline hover:bg-secondary hover:scale-105 transition-all"
            href={`/workshops/${workshop.id}`}
          >
            <h2 className="m-0 mb-2">{workshop.title}</h2>
            <p className="m-0">{workshop.description}</p>
          </a>
        );
      })}
    </div>
  );
};
