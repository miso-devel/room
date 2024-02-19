'use client'
import { Spinner } from '@/components/ui/Spinner'
import { UserProfile } from '@/features/user/components/UserProfile'
import type { Schema } from '@/types/common'
import type { FC, ReactNode } from 'react'
import useSwr from 'swr'
import { LogoutButton } from '../SignOutButton'

const fetcher = async (key: string) => {
  return await fetch(key, { mode: 'cors', credentials: 'include' })
    .then(res => res.json())
    .catch(_ => {
      throw new Error('Failed to fetch user data: user')
    })
}

export const Me: FC = () => {
  const { data: user, error, isLoading } = useSwr<Schema['User']>(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/me`, fetcher)

  if (error) return <p>取得に失敗しました</p>
  if (isLoading || !(user?.name && user?.avatar)) return <Spinner />

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
