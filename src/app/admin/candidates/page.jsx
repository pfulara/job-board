import { cookies } from 'next/headers';
import CandidatesContent from './CandidatesContent';
import Sidebar from './Sidebar';
import { Suspense } from 'react';
import Loader from '@/app/loader';

const getOffers = async () => {
  const token = cookies()
    .getAll()
    .find(
      (token) =>
        token.name === process.env.VERCEL_COOKIES_TOKEN
    ).value;
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/admin/offers`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify({ select: '_id title status' }),
      cache: 'no-store',
    }
  );

  const data = await res.json();

  return data;
};

export default async function CandidatesPage() {
  const offers = await getOffers();

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-4 h-full relative'>
      <div className='h-full mb-4'>
        <Sidebar offers={offers} />
      </div>
      <div className='col-span-3 relative'>
        <Suspense fallback={<Loader />}>
          <CandidatesContent />
        </Suspense>
      </div>
    </div>
  );
}
