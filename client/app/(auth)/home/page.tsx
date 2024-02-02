import { Suspense } from 'react';
import { Workshops } from './components/workshops';
import { Spinner } from '../../../components/ui/Spinner';

export default async function Home() {
  return (
    <Suspense fallback={<Spinner dark />}>
      <Workshops />
    </Suspense>
  );
}
