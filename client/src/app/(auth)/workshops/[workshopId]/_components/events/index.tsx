import { schema } from '@/types/common';
import { cdate } from 'cdate';
import { FC, ReactNode } from 'react';

type TEventProps = { event: schema['Event']; index: number };
type TEventsProps = { events: schema['Event'][] };

type TEventTableElement = { tableDataKind: 'td' | 'th'; children?: ReactNode };
const EventTableElement: FC<TEventTableElement> = ({ tableDataKind, children }) => {
  return tableDataKind === 'th' ? (
    <th className="px-4 py-4 border-2">{children}</th>
  ) : (
    <td className="px-4 py-4 border-2">{children}</td>
  );
};

const Event: FC<TEventProps> = ({ event, index }) => {
  const now = cdate(event.date);
  const createdDate = now.format('YYYY/MM/DD HH:mm');
  return (
    <tr>
      <EventTableElement tableDataKind="td">{index}</EventTableElement>
      <EventTableElement tableDataKind="td">{createdDate} ~ </EventTableElement>
      <EventTableElement tableDataKind="td">{event.theme}</EventTableElement>
    </tr>
  );
};

export const Events: FC<TEventsProps> = ({ events }) => {
  return (
    <>
      <h2 className="text-xl my-3">イベント一覧</h2>
      <table className="table-auto text-left rounded-md">
        <thead>
          <tr>
            <EventTableElement tableDataKind="th"></EventTableElement>
            <EventTableElement tableDataKind="th">開催日時</EventTableElement>
            <EventTableElement tableDataKind="th">テーマ</EventTableElement>
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
