import { notFound } from 'next/navigation';

import OfferPage from './OfferPage';
import { Suspense } from 'react';
import Loader from '@/app/loader';

export default function Offer({ params }) {
  const { offerId } = params;

  return (
    <div className='relative w-full'>
      <Suspense fallback={<Loader />}>
        <OfferPage offerId={offerId} />
      </Suspense>
    </div>
  );
}
