import { schema } from '../../../../../../../types/common';
import { FC } from 'react';

type TProps = { workshop: schema['Workshop'] };

export const Workshop: FC<TProps> = ({ workshop }) => {
  return (
    <div className="bg-secondary p-3 rounded-md my-5">
      <h2 className="m-0 mb-2 text-2xl">{workshop.title}</h2>
      <p>{workshop.description}</p>
    </div>
  );
};
