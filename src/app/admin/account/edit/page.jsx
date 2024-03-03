import { cookies } from 'next/headers';
import EditAccount from './EditAccount';
import { Suspense } from 'react';
import Loader from '@/app/loader';

const getCompany = async () => {
  const token = cookies()
    .getAll()
    .find(
      (token) => token.name === 'next-auth.session-token'
    ).value;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/admin/company`,
    {
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const company = await res.json();
  return company;
};

export default async function EditPage() {
  const company = await getCompany();
  return (
    <Suspense fallback={<Loader />}>
      <EditAccount company={company} />
    </Suspense>
  );
}
