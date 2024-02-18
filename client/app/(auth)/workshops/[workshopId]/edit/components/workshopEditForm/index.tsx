'use client'
import { FormWrapper } from '@/components/ui/Form/FormWrapper'
import { Input } from '@/components/ui/Form/Input'
import { Textarea } from '@/components/ui/Form/Textarea'
import type { Schema } from '@/types/common'
import type { FC } from 'react'
import { WorkshopEditButton } from '../workshopEditButton'
import { WorkshopEditPageTitle } from '../workshopEditPageTitle'
import { submit } from './actions'

export const WorkshopEditForm: FC<{ workshop: Schema['Workshop'] }> = ({ workshop }) => {
  return (
    <WorkshopEditPageTitle workshop={workshop}>
      <FormWrapper action={async form => await submit(form, workshop)}>
        <Input label='勉強会名' name='title' placeholder='workshop name here' type='text' defaultValue={workshop.title} required />
        <Textarea label='説明' name='description' placeholder='workshop description here' defaultValue={workshop.description} />
        <WorkshopEditButton />
      </FormWrapper>
    </WorkshopEditPageTitle>
  )
}
