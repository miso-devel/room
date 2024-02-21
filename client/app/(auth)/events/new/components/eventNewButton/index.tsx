'use client'
import { Button } from '@/components/ui/Button'
import { Spinner } from '@/components/ui/Spinner'
import { useFormStatus } from 'react-dom'

export const EventNewButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button type='submit' disabled={pending}>
      {pending ? <Spinner dark /> : '作成'}
    </Button>
  )
}
