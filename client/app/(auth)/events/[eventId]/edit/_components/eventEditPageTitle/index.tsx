import { FC, ReactNode } from "react";
import { WithTitleWrapper } from "../../../../../../../components/layout/WithTitleWrapper";
import { schema } from "../../../../../../../types/common";

type TWorkshopInfo = FC<{ event: schema["Event"]; children: ReactNode }>;

export const EventEditPageTitle: TWorkshopInfo = ({ event, children }) => {
  return (
    <WithTitleWrapper title={"編集中：" + event.theme}>
      {children}
    </WithTitleWrapper>
  );
};
