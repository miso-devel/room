import { LoginButton } from './components/LoginButton';

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-secondary text-bright">
      <h1 className="mb-5 text-3xl">Doer</h1>
      <LoginButton />
    </main>
  );
}
