import { Workshops } from './_components/workshops';
import { Suspense } from 'react';
import { Spinner } from '../../../../components/ui/Spinner';

export default async function WorkshopsPage() {
  return (
    <Suspense fallback={<Spinner dark />}>
      <Workshops />
    </Suspense>
  );
}
