import React, { Suspense } from 'react';
import SingleCandidate from './SingleCandidate';
import Loader from '@/app/loader';

export default function SingleCandidatePage({ params }) {
  const { candidateId } = params;
  return (
    <div className='relative'>
      <Suspense fallback={<Loader />}>
        <SingleCandidate candidateId={candidateId} />
      </Suspense>
    </div>
  );
}
