'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import LoadingIcon from '@/icons/LoadingIcon';

export default function Menu({ offerId, status }) {
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handlePublish = async () => {
    setPending(true);
    const res = await fetch(
      `/api/admin/offers/change-status`,
      {
        method: 'POST',
        body: JSON.stringify({
          offerId,
          status: 'Active',
        }),
      }
    );

    if (res.ok) {
      router.refresh();
    }
    setPending(false);
  };

  const handleDraft = async () => {
    setPending(true);
    const res = await fetch(
      `/api/admin/offers/change-status`,
      {
        method: 'POST',
        body: JSON.stringify({
          offerId,
          status: 'Draft',
        }),
      }
    );

    if (res.ok) {
      router.refresh();
    }
    setPending(false);
  };

  const handleClose = async () => {
    setPending(true);
    const res = await fetch(
      `/api/admin/offers/change-status`,
      {
        method: 'POST',
        body: JSON.stringify({
          offerId,
          status: 'Closed',
        }),
      }
    );

    if (res.ok) {
      router.refresh();
    }
    setPending(false);
  };

  return (
    <>
      <div>
        <div className='mb-10'>
          <Link href={`/admin/candidates/${offerId}`}>
            <Button
              fullWidth
              color='secondary'
              label='Candidates'
            />
          </Link>
        </div>
        <div className='mb-4'>
          <Link href={`/admin/offers/${offerId}/edit`}>
            <Button fullWidth label='Edit offer' />
          </Link>
        </div>
        <div className='mb-4'>
          {status === 'Active' ? (
            <Button
              fullWidth
              label='Make a draft'
              onClick={handleDraft}
            />
          ) : (
            <Button
              fullWidth
              label='Publish'
              onClick={handlePublish}
            />
          )}
        </div>
        <Button
          fullWidth
          label='Close offer'
          onClick={handleClose}
        />
      </div>
      {pending && (
        <div className='absolute h-full w-full flex items-center justify-center top-0 left-0 bg-secondary-dark z-10 opacity-85'>
          <LoadingIcon />
        </div>
      )}
    </>
  );
}
