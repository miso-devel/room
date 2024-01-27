import { schema } from '../../../../../../types/common';
import { FC } from 'react';
import { ContentBox } from '../../../../../../components/ui/Content/Box';

type TWorkshops = FC<{ workshops: schema['Workshop'][] }>;

export const Workshops: TWorkshops = async ({ workshops }) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {workshops.map((workshop) => {
        return (
          <ContentBox
            key={workshop.id}
            title={workshop.title}
            to={`workshops/${workshop.id}`}
            additionalInfo={workshop.description}
          />
        );
      })}
    </div>
  );
};
