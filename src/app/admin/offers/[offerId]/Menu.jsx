'use client';
import Button from '@/components/Button';
import LoadingIcon from '@/icons/LoadingIcon';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Menu({ offerId, status }) {
  const [pending, setPending] = useState(false);

  const handlePublish = async () => {
    setPending(true);
    await new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    setPending(false);
  };
  const handleDraft = async () => {
    setPending(true);
    await new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    setPending(false);
  };
  const handleCancel = async () => {
    setPending(true);
    await new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    setPending(false);
  };
  return (
    <>
      <div>
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
          label='Cancel offer'
          onClick={handleCancel}
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
