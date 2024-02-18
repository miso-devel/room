'use client'
import { FormWrapper } from '@/components/ui/Form/FormWrapper'
import { Input } from '@/components/ui/Form/Input'
import type { Schema } from '@/types/common'
import type { FC } from 'react'
import { UserSelectModal } from '../UserSelectModal'
import { EventNewButton } from '../eventNewButton'
import { Workshop } from '../workshop'
import { submit } from './actions'

type EventForm = FC<{ workshop: Schema['Workshop']; users: Schema['User'][] }>

export const EventForm: EventForm = ({ workshop, users }) => {
  return (
    <>
      <Workshop workshop={workshop} />
      <FormWrapper action={async form => await submit(form, workshop.id)}>
        <Input label='テーマ' name='theme' placeholder='theme here' type='text' required />
        <Input label='時間' name='datetime' placeholder='date here' type='datetime-local' required />
        <UserSelectModal users={users} />
        <EventNewButton />
      </FormWrapper>
    </>
  )
}
