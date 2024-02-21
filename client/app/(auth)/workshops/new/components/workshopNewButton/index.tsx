'use client'
import { Button } from '@/components/ui/Button'
import { Spinner } from '@/components/ui/Spinner'
import type { FC } from 'react'
import { useFormStatus } from 'react-dom'

export const WorkshopNewButton: FC = () => {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} type='submit'>
      {pending ? <Spinner dark /> : '作成'}
    </Button>
  )
}
