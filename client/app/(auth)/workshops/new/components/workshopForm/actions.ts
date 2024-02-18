'use server'
import type { Schema } from '@/types/common'
import { fetcher } from '@/util/fetcher'
import { redirect } from 'next/navigation'

export const submit = async (formData: FormData) => {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const res = await fetcher.post<Schema['WorkshopInput'], Schema['Workshop']>('/workshops', { title, description }, { cache: 'no-cache' })
  res && redirect(`/workshops/${res.id}`)
}
