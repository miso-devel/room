'use server'
import type { Schema } from '@/types/common'
import { fetcher } from '@/util/fetcher'
import { redirect } from 'next/navigation'

export const submit = async (formData: FormData, event: Schema['Event']) => {
  const theme = formData.get('theme') as string
  const updatedEvent: Schema['Event'] = { ...event, theme }
  const res = await fetcher.patch<Schema['Event'], Schema['Event']>('/events', updatedEvent)
  res && redirect(`/workshops/${res.workshopId}`)
}
