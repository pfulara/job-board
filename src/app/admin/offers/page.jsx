'use server';
import { Suspense } from 'react';
import Offers from './Offers';
import Loader from '@/app/loader';

export default async function OffersPage() {
  return (
    <div>
      <h2 className='mb-4 pb-4 border-b-2 border-text'>
        My Offers
      </h2>
      <Suspense fallback={<Loader />}>
        <Offers />
      </Suspense>
    </div>
  );
}
