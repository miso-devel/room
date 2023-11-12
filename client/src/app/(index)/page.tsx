import { LoginButton } from './_components/LoginButton';

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="prose text-center">
        <h1>Doer Member Site</h1>
        <LoginButton />
      </div>
    </main>
  );
}
