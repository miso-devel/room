'use client'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

export const LoginButton = async () => {
  const router = useRouter()
  const signIn = async () => {
    const res: { redirectUrl: string } = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/signin`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      credentials: 'include',
    })
      .then(res => res.json())
      .catch(err => console.error(err))
    if (res.redirectUrl) router.push(res.redirectUrl)
  }
  return (
    <Button onClick={signIn} onDark>
      Discordでログインする
    </Button>
  )
}
