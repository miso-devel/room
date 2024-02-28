import { LoginButton } from './components/LoginButton'

export default function App() {
  return (
    <main className='flex min-h-screen w-full flex-col items-center justify-center bg-secondary text-bright'>
      <h1 className='text-3xl'>Do'er</h1>
      <p className='mt-2 mb-5 font-normal'>Do'erの勉強会サーバーです</p>
      <LoginButton />
    </main>
  )
}
