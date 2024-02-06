import Logo from '@/components/Logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='h-16 flex px-4 border-b border-primary bg-primary-dark'>
      <div>
        <Link href='/'>
          <Logo color='text-light' />
        </Link>
      </div>
      <div className='w-full flex justify-end items-center'>
        Avatar
      </div>
    </header>
  );
}
