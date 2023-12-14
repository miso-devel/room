import { LoginButton } from './_components/LoginButton';

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-secondary text-bright">
      <h1 className="text-3xl mb-5">Doer</h1>
      <LoginButton />
    </main>
  );
}
