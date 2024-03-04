'use client';
import React, { useState, useEffect } from 'react';
import {
  useRouter,
  useSearchParams,
} from 'next/navigation';

import formatUrl from '@/utils/formatUrl';
import CustomSelect from '@/components/Select';
import Checkbox from '@/components/Checkbox';

export default function Sidebar({ offers }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentOffer = searchParams.get('offer');
  const currenUnread = searchParams.get('unread');

  const [params, setParams] = useState({
    offer: currentOffer || '',
    unread: currenUnread || '',
  });
  const [onlyActive, setOnlyActive] = useState(true);

  useEffect(() => {
    const newParams = formatUrl(params);
    router.push(
      `${newParams ? `?${newParams}` : '/admin/candidates'}`
    );
  }, [params, router]);

  const handleChange = (key, value) => {
    if (key === 'unread' && value === false) {
      setParams({ offer: params.offer });
    } else {
      setParams({ ...params, [key]: value });
    }
  };

  const filteresOffers = onlyActive
    ? offers.filter((offer) => offer.status === 'Active')
    : offers;

  return (
    <div className='bg-secondary-light p-4 rounded-xl shadow-md'>
      <h4 className='text-center mb-4'>Filters</h4>
      <CustomSelect
        label='Offer'
        value={currentOffer}
        items={[
          { id: '', label: 'All offers' },
          ...filteresOffers?.map((offer) => ({
            value: offer._id,
            label: offer.title,
          })),
        ]}
        onChange={(e) =>
          handleChange('offer', e.target.value)
        }
      />
      <Checkbox
        value={onlyActive}
        onChange={(e) => setOnlyActive(e.target.checked)}
        label='Only active offers'
      />
      <div className='mt-4'>
        <Checkbox
          value={currenUnread}
          onChange={() =>
            handleChange('unread', !currenUnread)
          }
          label='New candidates'
        />
      </div>
    </div>
  );
}
