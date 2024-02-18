import { ContentBox } from '@/components/ui/Content/Box'
import { ContentsWrapper } from '@/components/ui/Content/Wrapper'
import type { Schema } from '@/types/common'
import { fetcher } from '@/util/fetcher'
import type { FC } from 'react'

export const Workshops: FC = async () => {
  const workshops = await fetcher.get<Schema['Workshop'][]>('/workshops', { cache: 'no-cache' })
  return (
    <ContentsWrapper>
      {workshops.map(workshop => (
        <ContentBox key={workshop.id} title={workshop.title} to={`workshops/${workshop.id}`} additionalInfo={workshop.description} />
      ))}
    </ContentsWrapper>
  )
}
