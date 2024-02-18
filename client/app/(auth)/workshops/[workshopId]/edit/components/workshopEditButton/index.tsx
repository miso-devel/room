'use client'
import { Button } from '@/components/ui/Button'
import { Spinner } from '@/components/ui/Spinner'
import { useFormStatus } from 'react-dom'

export const WorkshopEditButton = () => {
  const { pending } = useFormStatus()

  return <Button disabled={pending}>{pending ? <Spinner dark /> : '編集'}</Button>
}
