import EmailIcon from '@/icons/EmailIcon';
import LocationIcon from '@/icons/LocationIcon';
import { cookies } from 'next/headers';
import Image from 'next/image';

const getCompany = async () => {
  const token = cookies()
    .getAll()
    .find(
      (token) =>
        token.name === process.env.VERCEL_COOKIES_TOKEN
    ).value;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/admin/company`,
    {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const company = await res.json();
  return company;
};

export default async function SettingsPage() {
  const company = await getCompany();

  return (
    <>
      <div className='bg-secondary p-4 rounded-xl grid grid-cols-1 lg:grid-cols-4 gap-4 shadow-md'>
        <div>
          {company.logo ? (
            <Image
              src={company.logo}
              alt={company.companyName}
              width={200}
              height={200}
            />
          ) : (
            <div className='w-[200px] h-[200px] bg-secondary-dark p-4 flex items-center justify-center text-center text-xl rounded-xl'>
              There is no logo uploaded
            </div>
          )}
        </div>
        <div className='col-span-3'>
          <h2 className='pb-2 mb-6 border-b'>
            {company.companyName}
          </h2>
          <div>
            <p className='flex gap-2'>
              <EmailIcon /> {company.email}
            </p>
            <p className='flex gap-2'>
              <LocationIcon />
              {company.companyAddress}
            </p>
          </div>
        </div>
      </div>
      {company.description && (
        <div className='bg-secondary p-4 rounded-xl shadow-md mt-4'>
          <div
            dangerouslySetInnerHTML={{
              __html: company.description,
            }}
          />
        </div>
      )}
    </>
  );
}
