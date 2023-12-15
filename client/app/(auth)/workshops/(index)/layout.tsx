import { ReactNode } from 'react';
import { SvgLink } from '../../../../components/ui/Link/SvgLink';
import { WithTitleWrapper } from '../../../../components/layout/WithTitleWrapper';
import Add from 'public/svg/add.svg';

export default async function PageLayout({ children }: { children: ReactNode }) {
  return (
    <WithTitleWrapper
      title="勉強会一覧"
      additionalElms={
        <SvgLink href="/workshops/new" ariaLabel="勉強会作成">
          <Add className="h-6 w-6 rounded-md bg-middle fill-dark hover:bg-dark hover:fill-bright" />
        </SvgLink>
      }
    >
      {children}
    </WithTitleWrapper>
  );
}
