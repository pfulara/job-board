import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';

export default function Sidebar() {
  return (
    <div className='bg-secondary p-4 rounded-xl flex flex-col gap-6 h-full shadow-md'>
      <Link href='/admin/account' className='border-b'>
        <Button fullWidth label='Company info' />
      </Link>
      <Link href='/admin/account/edit' className='border-b'>
        <Button fullWidth label='Edit comapny' />
      </Link>
      <Link
        href='/admin/account/upload-files'
        className='border-b'
      >
        <Button fullWidth label='Upload files' />
      </Link>
    </div>
  );
}
