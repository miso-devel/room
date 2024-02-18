import type { Schema } from '@/types/common'
import type { FC } from 'react'
import { ContentBox } from '../../../../../../components/ui/Content/Box'
import { ContentsWrapper } from '../../../../../../components/ui/Content/Wrapper'
import { fetcher } from '../../../../../../util/fetcher'

export const Events: FC = async () => {
  const events = await fetcher.get<Schema['Event'][]>('/events', { cache: 'no-cache' })
  return (
    <ContentsWrapper>
      {events.map(event => (
        <ContentBox key={event.id} title={event.theme} to={`/workshops/${event.workshopId}`} />
      ))}
    </ContentsWrapper>
  )
}
