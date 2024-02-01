import { schema } from '../../../../../../../types/common';
import { FC } from 'react';

type TProps = { workshop: schema['Workshop'] };

export const Workshop: FC<TProps> = ({ workshop }) => {
  return (
    <div className="mb-5 rounded-md border-2 bg-secondary p-3 text-bright">
      <h2 className="m-0 mb-2 text-2xl">{workshop.title}</h2>
      <p className="text-xs">{workshop.description}</p>
    </div>
  );
};
