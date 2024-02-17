import { notFound } from 'next/navigation';

import OfferPage from './OfferPage';
import { Suspense } from 'react';
import Loader from '@/app/loader';

async function getOffer(id) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/offers/${id}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Offer({ params }) {
  const { offerId } = params;
  const offer = await getOffer(offerId);
  if (!offer.title) notFound();

  return (
    <div className='relative w-full'>
      <Suspense fallback={<Loader />}>
        <OfferPage offer={offer} />
      </Suspense>
    </div>
  );
}
