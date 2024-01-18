import { ReactNode } from 'react';
import { SvgLink } from '../../../../components/ui/Link/SvgLink';
import { WithTitleWrapper } from '../../../../components/layout/WithTitleWrapper';

import Image from 'next/image';

export default async function PageLayout({ children }: { children: ReactNode }) {
  return (
    <WithTitleWrapper
      title="勉強会一覧"
      additionalElms={
        <SvgLink href="/workshops/new" ariaLabel="勉強会作成">
          <Image
            src="/svg/add.svg"
            alt="勉強会作成ボタン"
            width={10}
            height={10}
            className="h-6 w-6 rounded-md bg-middle fill-dark p-1 hover:bg-dark hover:fill-bright"
          />
        </SvgLink>
      }
    >
      {children}
    </WithTitleWrapper>
  );
}
