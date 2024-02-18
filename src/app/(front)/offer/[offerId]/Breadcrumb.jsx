'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import BackIcon from '@/icons/BackIcon';
import categories from '@/utils/categories';

export default function Breadcrumb({ offer }) {
  const router = useRouter();
  return (
    <div className='flex gap-4 font-bold px-4 py-2 bg-secondary-light rounded-xl items-center mb-4 shadow-md'>
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
      <Link href='/'>All offers</Link>
      <Link href={`/?category=${offer.category}`}>
        {
          categories.find(
            (category) => category.id === offer.category
          ).label
        }
      </Link>
    </div>
  );
}
