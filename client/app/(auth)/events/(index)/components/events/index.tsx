import { FC } from 'react';
import { fetcher } from '../../../../../../util/fetcher';
import { schema } from '../../../../../../types/common';
import { ContentBox } from '../../../../../../components/ui/Content/Box';
import { ContentsWrapper } from '../../../../../../components/ui/Content/Wrapper';

export const Events: FC = async () => {
  const events = await fetcher.get<schema['Event'][]>('/events', { cache: 'no-cache' });
  return (
    <ContentsWrapper>
      {events.map((event) => (
        <ContentBox key={event.id} title={event.theme} to={`/workshops/${event.workshopId}`} />
      ))}
    </ContentsWrapper>
  );
};
