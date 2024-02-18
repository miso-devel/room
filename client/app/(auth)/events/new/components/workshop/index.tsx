import type { Schema } from '@/types/common'
import type { FC } from 'react'

export const Workshop: FC<{ workshop: Schema['Workshop'] }> = ({ workshop }) => {
  return (
    <div className='mb-5 rounded-md border-2 bg-secondary p-3 text-bright'>
      <h2 className='m-0 mb-2 text-2xl'>{workshop.title}</h2>
      <p className='text-xs'>{workshop.description}</p>
    </div>
  )
}
