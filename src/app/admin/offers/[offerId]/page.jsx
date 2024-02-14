import { Suspense } from 'react';
import SingleOffer from './SingleOffer';
import Loader from '@/app/loader';

export default async function SingleOfferPage({ params }) {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <SingleOffer params={params} />
      </Suspense>
    </div>
  );
}
