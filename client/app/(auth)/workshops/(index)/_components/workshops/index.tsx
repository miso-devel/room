import { schema } from '../../../../../../types/common';
import { FC } from 'react';
import { ContentBox } from '../../../../../../components/ui/Content/Box';
import { fetcher } from '../../../../../../util/fetcher';
import { ContentsWrapper } from '../../../../../../components/ui/Content/Wrapper';

export const Workshops: FC = async () => {
  const workshops = await fetcher.get<schema['Workshop'][]>('/workshops', { cache: 'no-cache' });
  return (
    <ContentsWrapper>
      {workshops.map((workshop) => (
        <ContentBox
          key={workshop.id}
          title={workshop.title}
          to={`workshops/${workshop.id}`}
          additionalInfo={workshop.description}
        />
      ))}
    </ContentsWrapper>
  );
};
