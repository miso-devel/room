import { schema } from '../../../../../types/common';
import { cdate } from 'cdate';
import { FC } from 'react';

type TWorkshops = { workshops: schema['Workshop'][] };
type TWorkshop = { workshop: schema['Workshop'] };

export const Workshops: FC<TWorkshops> = ({ workshops }) => {
  return (
    <div className="rounded-md border-middle border-2 shadow-md">
      <h1 className="text-2xl p-3">最近のworkshop</h1>
      <div className="flex flex-col gap-1 p-3">
        {workshops.map((workshop) => {
          return <Workshop key={workshop.id} workshop={workshop} />;
        })}
      </div>
    </div>
  );
};

export const Workshop: FC<TWorkshop> = ({ workshop }) => {
  const now = cdate(workshop.createdAt);
  const createdDate = now.format('YYYY-MM-DD');
  return (
    <div className="p-1 flex gap-3 items-center">
      <span className="text-xs">{createdDate}</span>
      <a className="hover:opacity-60" href={`workshops/${workshop.id}`}>
        {workshop.title}
      </a>
    </div>
  );
};
