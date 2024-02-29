import { LoginButton } from './components/LoginButton'

export default function App() {
  return (
    <main className='flex min-h-screen w-full flex-col items-center justify-center bg-secondary text-bright'>
      <h1 className='text-3xl mb-5'>Do'er</h1>
      <LoginButton />
    </main>
  )
}
