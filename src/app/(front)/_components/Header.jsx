import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='h-16 flex px-4 border-b border-primary'>
      <div>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
      <div className='w-full flex justify-end items-center'>
        <Link href='/admin/offers/new'>
          <Button label='Post an offer' />
        </Link>
      </div>
    </header>
  );
}
