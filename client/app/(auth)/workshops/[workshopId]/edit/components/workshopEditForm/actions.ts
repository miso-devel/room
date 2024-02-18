'use server'
import type { Schema } from '@/types/common'
import { fetcher } from '@/util/fetcher'
import { redirect } from 'next/navigation'

export const submit = async (formData: FormData, workshop: Schema['Workshop']) => {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const updatedWorkshop: Schema['Workshop'] = { ...workshop, title, description }
  const res = await fetcher.patch<Schema['Workshop'], Schema['Workshop']>('/workshops', updatedWorkshop)
  res && redirect(`/workshops/${res.id}`)
}
