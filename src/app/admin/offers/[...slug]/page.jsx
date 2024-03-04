import { Suspense } from 'react';
import OfferWrapper from './OfferWrapper';
import Loader from '@/app/loader';

export default async function SingleOfferPage({ params }) {
  return (
    <div className='relative'>
      <Suspense fallback={<Loader />}>
        <OfferWrapper params={params} />
      </Suspense>
    </div>
  );
}
