import { ReactNode } from "react";
import { WithTitleWrapper } from "../../../../components/layout/WithTitleWrapper";

export default async function PageLayout(
  { children }: { children: ReactNode },
) {
  return (
    <div className="mx-auto w-[60%]">
      <WithTitleWrapper title="新しいイベントを作成する">
        {children}
      </WithTitleWrapper>
    </div>
  );
}
