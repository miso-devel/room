import type { FC } from 'react'

type Spinner = FC<{ dark?: boolean }>
export const Spinner: Spinner = ({ dark }) => {
  return (
    <div className='m-auto flex justify-center' aria-label='読み込み中'>
      <div className={`h-5 w-5 animate-spin rounded-full border-2 ${dark ? 'border-primary' : 'border-white'}  border-t-transparent`} />
    </div>
  )
}
