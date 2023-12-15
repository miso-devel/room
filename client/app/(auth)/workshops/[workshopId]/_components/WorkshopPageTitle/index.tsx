import { WithTitleWrapper } from '../../../../../../components/layout/WithTitleWrapper';
import { SvgLink } from '../../../../../../components/ui/Link/SvgLink';
import { schema } from '../../../../../../types/common';
import { FC } from 'react';
import Add from 'public/svg/add.svg';

type TWorkshopInfoProps = { workshop: schema['Workshop'] };

export const WorkshopPageTitle: FC<TWorkshopInfoProps> = ({ workshop }) => {
  return (
    <WithTitleWrapper title={workshop.title}>
      <div className="my-3 break-all rounded-md bg-middle p-3">
        <p>{workshop.description}</p>
      </div>
    </WithTitleWrapper>
  );
};
