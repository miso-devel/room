import { ButtonLink } from '../../../../../../components/ui/Link/ButtonLink';
import { schema } from '../../../../../../types/common';

import { FC } from 'react';

type TWorkshopInfoProps = { workshop: schema['Workshop'] };

export const WorkshopInfo: FC<TWorkshopInfoProps> = ({ workshop }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <h1 className=" text-3xl">{workshop.title}</h1>
        <ButtonLink href={`/events/${workshop.id}/new`}>イベントの作成</ButtonLink>
      </div>
      <div className="break-all p-3 bg-middle rounded-md my-3">
        <p>{workshop.description}</p>
      </div>
    </div>
  );
};
