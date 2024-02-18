import { SvgLink } from '@/components/ui/Link/SvgLink'
import type { Schema } from '@/types/common'
import { fetcher } from '@/util/fetcher'
import { cdate } from 'cdate'
import Image from 'next/image'
import type { FC, ReactNode } from 'react'

type EventProps = { event: Schema['EventOutput']; index: number }
type EventsProps = FC<{ workshopId: string }>

type EventTableElement = { tableDataKind: 'td' | 'th'; children?: ReactNode }
const EventTableElement: FC<EventTableElement> = ({ tableDataKind, children }) => {
  return tableDataKind === 'th' ? <th className='border-2 px-4 py-4'>{children}</th> : <td className='border-2 px-4 py-4'>{children}</td>
}

const Event: FC<EventProps> = ({ event, index }) => {
  const now = cdate(event.datetime)
  const createdDate = now.format('YYYY/MM/DD HH:mm')
  return (
    <tr>
      <EventTableElement tableDataKind='td'>{index}</EventTableElement>
      <EventTableElement tableDataKind='td'>{createdDate} ~</EventTableElement>
      <EventTableElement tableDataKind='td'>{event.theme}</EventTableElement>
      <EventTableElement tableDataKind='td'>
        {/* TODO:画像が入らないパターンもあるのでいい感じにコンポーネントにまとめる */}
        <div className='flex gap-3'>
          {event.speakers.map(speaker => {
            return (
              <div key={speaker.id} className='flex items-center'>
                <Image src={speaker.avatar} width={30} height={30} alt={''} className='rounded-full' />
              </div>
            )
          })}
        </div>
      </EventTableElement>
    </tr>
  )
}

export const EventsInfo: EventsProps = async ({ workshopId }) => {
  const events = await fetcher.get<Schema['EventOutput'][]>(`/events?workshopId=${workshopId}`)
  return (
    <>
      <div className='flex items-center gap-3'>
        <h2 className='my-3 text-xl'>イベント一覧</h2>
        <SvgLink href={`/workshops/${workshopId}/new`} ariaLabel='イベントの作成' svgName='add' svgAlt='イベント追加ボタン' />
      </div>

      <table className='table-auto rounded-md text-left'>
        <thead>
          <tr>
            <EventTableElement tableDataKind='th' />
            <EventTableElement tableDataKind='th'>開催日時</EventTableElement>
            <EventTableElement tableDataKind='th'>テーマ</EventTableElement>
            <EventTableElement tableDataKind='th'>参加者</EventTableElement>
          </tr>
        </thead>
        <tbody>
          {events.map((event, i) => (
            <Event key={event.id} event={event} index={events.length - i} />
          ))}
        </tbody>
      </table>
    </>
  )
}
