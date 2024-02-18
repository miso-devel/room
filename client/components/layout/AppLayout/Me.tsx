import { UserProfile } from '@/features/user/components/UserProfile'
import type { Schema } from '@/types/common'
import { fetcher } from '@/util/fetcher'
import type { FC, ReactNode } from 'react'
import { LogoutButton } from '../SignOutButton'

export const Me: FC = async () => {
  const user: Schema['User'] = await fetcher.get('/users/me')
  return (
    <>
      <UserProfile name={user.name} avatarPath={user.avatar} />
      <LogoutButton />
    </>
  )
}

export const MeWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='mt-5 flex gap-2 rounded-2xl bg-primary p-3'>{children}</div>
}
