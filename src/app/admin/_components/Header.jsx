'use client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

import Logo from '@/components/Logo';
import Button from '@/components/Button';

export default function Header() {
  return (
    <header className='h-16 flex px-4 border-b border-primary bg-primary-dark'>
      <div>
        <Link href='/admin'>
          <Logo color='text-light' />
        </Link>
      </div>
      <div className='w-full flex justify-end items-center gap-4'>
        <Link href='/admin/offers/new'>
          <Button label='Post an offer' color='secondary' />
        </Link>
        <Button onClick={signOut} label='Logout' />
      </div>
    </header>
  );
}
