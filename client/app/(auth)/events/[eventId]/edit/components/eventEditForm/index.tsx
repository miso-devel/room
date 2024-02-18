'use client'
import { FormWrapper } from '@/components/ui/Form/FormWrapper'
import { Input } from '@/components/ui/Form/Input'
import type { Schema } from '@/types/common'
import type { FC } from 'react'
import { WorkshopEditButton } from '../eventEditButton'
import { EventEditPageTitle } from '../eventEditPageTitle'
import { submit } from './actions'

type WorkshopForm = FC<{ event: Schema['Event'] }>

export const EventEditForm: WorkshopForm = ({ event }) => {
  return (
    <EventEditPageTitle event={event}>
      <FormWrapper action={async form => await submit(form, event)}>
        <Input label='イベント名' name='theme' placeholder='event name here' type='text' defaultValue={event.theme} required={true} />
        <WorkshopEditButton />
      </FormWrapper>
    </EventEditPageTitle>
  )
}
