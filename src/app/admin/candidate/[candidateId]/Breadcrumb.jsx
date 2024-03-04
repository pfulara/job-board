'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import BackIcon from '@/icons/BackIcon';

export default function Breadcrumb({ offer }) {
  const router = useRouter();
  return (
    <div className='flex gap-4 font-bold items-center'>
      <button
        className='rounded-full border border-text-dark p-2'
        onClick={() => router.back()}
      >
        <BackIcon
          color='text-dark'
          width='16px'
          height='16px'
        />
      </button>
      <Link href='/admin/candidates'>All candidates</Link>
      <Link href={`/admin/candidates/${offer._id}`}>
        {offer.title} candidates
      </Link>
    </div>
  );
}
