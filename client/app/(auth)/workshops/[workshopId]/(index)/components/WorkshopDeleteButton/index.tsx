'use client'
import { SvgImage } from '@/components/ui/Image/SvgImage'
import { SvgLink } from '@/components/ui/Link/SvgLink'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'

export const WorkshopDeleteButton: FC<{ workshopId: string }> = ({ workshopId }) => {
  const router = useRouter()

  // TODO:リダイレクト時に消したはずのworkshopが残っているので上手いことやるようにする
  const onDeleteWorkshop = async () => {
    if (confirm('本当に削除しますか？')) {
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/workshops`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: workshopId }),
        method: 'DELETE',
        mode: 'cors',
        credentials: 'include',
      }).then(_ => {
        router.push('/workshops')
      })
    }
  }

  return (
    <div className='flex gap-1'>
      <SvgLink href={`/workshops/${workshopId}/edit`} ariaLabel='イベントの作成' svgName='edit' svgAlt='イベントの編集ボタン' />
      <button type='button' onClick={onDeleteWorkshop}>
        <SvgImage svgName='delete' svgAlt='イベントの削除ボタン' ariaLabel='イベントの削除ボタン' />
      </button>
    </div>
  )
}
