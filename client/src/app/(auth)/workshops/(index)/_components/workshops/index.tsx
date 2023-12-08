import { components } from '@/types/schema';
import { FC } from 'react';

type TProps = { workshops: components['schemas']['Workshop'][] };

export const Workshops: FC<TProps> = ({ workshops }) => {
  return (
    <div className="grid grid-cols-3 gap-5 my-5">
      {workshops.map((workshop) => {
        return (
          <a
            key={workshop.id}
            className="p-3 rounded-md transition-all bg-secondary hover:bg-accent hover:text-dark shadow-2xl"
            href={`/workshops/${workshop.id}`}
          >
            <h2 className="text-xl mb-2">{workshop.title}</h2>
            <p className="text-xs">{workshop.description}</p>
          </a>
        );
      })}
    </div>
  );
};
