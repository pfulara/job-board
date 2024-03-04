import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className='bg-primary-dark p-4 text-text-light'>
      <ul>
        <Link href='/admin/offers'>
          <li className='py-3 px-2 font-medium uppercase hover:translate-x-2 transition ease-in-out'>
            Offers
          </li>
        </Link>
        <Link href='/admin/candidates'>
          <li className='py-3 px-2 font-medium uppercase hover:translate-x-2 transition ease-in-out'>
            Candidates
          </li>
        </Link>
        <Link href='/admin/account'>
          <li className='py-3 px-2 font-medium uppercase hover:translate-x-2 transition ease-in-out'>
            Account
          </li>
        </Link>
      </ul>
    </div>
  );
}
