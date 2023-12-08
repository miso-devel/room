import { LoginButton } from './_components/LoginButton';

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-primary">
      <div className="prose text-center">
        <h1 className=" text-3xl">Doer Member Site</h1>
        <LoginButton />
      </div>
    </main>
  );
}
