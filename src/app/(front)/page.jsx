'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import OfferCard from '@/components/OfferCard';
import NoOffers from '@/components/NoOffers';
import Filters from './_components/Filters';
import LoadingIcon from '@/icons/LoadingIcon';

export default function Home() {
  const [offers, setOffers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const params = {};
    searchParams.forEach(
      (value, key) => (params[key] = value)
    );
    fetch(`/api/offers`, {
      cache: 'no-store',
      method: 'POST',
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setLoading(false);
      });
  }, [searchParams]);

  return (
    <div className='w-full grid grid-cols-6 gap-4'>
      <div className='hidden lg:block lg:col-span-2'>
        <Filters />
      </div>
      <div className='col-span-6 lg:col-span-4 lg:h-[calc(100vh-theme(height.32))] lg:overflow-y-scroll lg:pr-4'>
        {isLoading ? (
          <div className='flex flex-cols w-full h-full items-center justify-center'>
            <LoadingIcon />
          </div>
        ) : !offers.length ? (
          <NoOffers />
        ) : (
          offers?.map((offer) => (
            <Link
              key={offer._id}
              href={`/offer/${offer._id}`}
            >
              <OfferCard offer={offer} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
