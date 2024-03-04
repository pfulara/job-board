import React, { Suspense } from 'react';

import OfferCandidatesPage from './OfferCandidatesPage';
import Loader from '@/app/loader';

export default function CandidatesPage({ params }) {
  const { offerId } = params;
  return (
    <div className='relative'>
      <Suspense fallback={<Loader />}>
        <OfferCandidatesPage offerId={offerId} />
      </Suspense>
    </div>
  );
}
