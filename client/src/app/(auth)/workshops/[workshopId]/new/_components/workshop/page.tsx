import { components } from '@/types/schema';
import { FC } from 'react';

type TProps = { workshop: components['schemas']['Workshop'] };

export const Workshop: FC<TProps> = ({ workshop }) => {
  return (
    <div className="border-2 border-secondary p-3 rounded-md my-5">
      <h2 className="m-0 mb-2">{workshop.title}</h2>
      <p className="m-0">{workshop.description}</p>
    </div>
  );
};
