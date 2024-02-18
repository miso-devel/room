import type { Schema } from '@/types/common'
import { formatDateTime } from '@/util/date'
import { fetcher } from '@/util/fetcher'
import type { FC } from 'react'

export const Workshops: FC = async () => {
  const workshops = await fetcher.get<Schema['Workshop'][]>('/workshops?limit=7', { cache: 'no-cache' })
  return (
    <div className='grid grid-cols-2 gap-5'>
      <div className='rounded-md border-2 border-middle shadow-md'>
        <h1 className='p-3 text-2xl'>最近のworkshop</h1>
        <div className='flex flex-col gap-1 p-3'>
          {workshops.map(workshop => (
            <Workshop key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Workshop: FC<{ workshop: Schema['Workshop'] }> = ({ workshop }) => {
  const now = formatDateTime(workshop.createdAt)
  return (
    <div className='flex items-center gap-3 p-1'>
      <span className='text-xs'>{now}</span>
      <a className='hover:opacity-60' href={`workshops/${workshop.id}`}>
        {workshop.title}
      </a>
    </div>
  )
}
