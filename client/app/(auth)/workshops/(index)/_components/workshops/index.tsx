import { schema } from '../../../../../../types/common';
import { FC } from 'react';
import Link from 'next/link';

type TWorkshopsProps = { workshops: schema['Workshop'][] };
type TWorkshopProps = { workshop: schema['Workshop'] };

export const Workshops: FC<TWorkshopsProps> = async ({ workshops }) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {workshops.map((workshop) => {
        return <Workshop key={workshop.id} workshop={workshop} />;
      })}
    </div>
  );
};

const Workshop: FC<TWorkshopProps> = ({ workshop }) => {
  return (
    <Link
      href={`/workshops/${workshop.id}`}
      className="border-b-2 py-2 transition-all hover:border-b-primary hover:opacity-80"
    >
      <h2 className="mb-2 text-xl">{workshop.title}</h2>
      <p className="text-sm">{workshop.description}</p>
    </Link>
  );
};
