import { schema } from '../../../../../../../types/common';
import { cdate } from 'cdate';
import { FC, ReactNode } from 'react';
import { SvgLink } from '../../../../../../../components/ui/Link/SvgLink';
import Image from 'next/image';

type TEventProps = { event: schema['EventOutput']; index: number };
type TEventsProps = { events: schema['EventOutput'][]; workshopId: string };

type TEventTableElement = { tableDataKind: 'td' | 'th'; children?: ReactNode };
const EventTableElement: FC<TEventTableElement> = ({ tableDataKind, children }) => {
  return tableDataKind === 'th' ? (
    <th className="border-2 px-4 py-4">{children}</th>
  ) : (
    <td className="border-2 px-4 py-4">{children}</td>
  );
};

const Event: FC<TEventProps> = ({ event, index }) => {
  const now = cdate(event.datetime);
  const createdDate = now.format('YYYY/MM/DD HH:mm');
  return (
    <tr>
      <EventTableElement tableDataKind="td">{index}</EventTableElement>
      <EventTableElement tableDataKind="td">{createdDate} ~ </EventTableElement>
      <EventTableElement tableDataKind="td">{event.theme}</EventTableElement>
      <EventTableElement tableDataKind="td">
        {/* TODO:画像が入らないパターンもあるのでいい感じにコンポーネントにまとめる */}
        <div className="flex gap-3">
          {event.speakers.map((speaker) => {
            return (
              <div key={speaker.id} className="flex items-center">
                <Image src={speaker.avatar} width={30} height={30} alt={''} className="rounded-full" />
              </div>
            );
          })}
        </div>
      </EventTableElement>
    </tr>
  );
};

export const EventsInfo: FC<TEventsProps> = ({ events, workshopId }) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <h2 className="my-3 text-xl">イベント一覧</h2>
        <SvgLink href={`/events/${workshopId}/new`} ariaLabel="イベントの作成">
          <Image
            src="/svg/add.svg"
            alt="イベント追加ボタン"
            width={10}
            height={10}
            className="h-6 w-6 rounded-md bg-middle fill-dark p-1 hover:bg-dark hover:fill-bright"
          />
        </SvgLink>
      </div>

      <table className="table-auto rounded-md text-left">
        <thead>
          <tr>
            <EventTableElement tableDataKind="th" />
            <EventTableElement tableDataKind="th">開催日時</EventTableElement>
            <EventTableElement tableDataKind="th">テーマ</EventTableElement>
            <EventTableElement tableDataKind="th">参加者</EventTableElement>
          </tr>
        </thead>
        <tbody>
          {events.map((event, i) => (
            <Event key={event.id} event={event} index={events.length - i} />
          ))}
        </tbody>
      </table>
    </>
  );
};
