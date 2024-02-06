import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className='bg-primary-dark p-4 text-text-light'>
      <ul>
        <li className='py-3 px-2 font-medium uppercase hover:translate-x-2 transition ease-in-out'>
          <Link href='/admin/offers'>Offers</Link>
        </li>
        <li className='py-3 px-2 font-medium uppercase hover:translate-x-2 transition ease-in-out'>
          <Link href='/admin/settings'>Settings</Link>
        </li>
      </ul>
    </div>
  );
}
