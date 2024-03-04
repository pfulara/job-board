import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import Breadcrumb from './Breadcrumb';
import MoreOffer from './MoreOffer';

import SkillsIcon from '@/icons/SkillsIcon';
import OfficeIcon from '@/icons/OfficeIcon';
import Logo from '@/components/Logo';
import MoneyIcon from '@/icons/MoneyIcon';
import Loader from '@/app/loader';
import Image from 'next/image';
import ApplyForm from './ApplyForm';

async function getOffer(id) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/offers/${id}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function OfferPage({ offerId }) {
  const offer = await getOffer(offerId);
  if (!offer.title) notFound();

  return (
    <div className='w-full'>
      <Breadcrumb offer={offer} />
      <div className='grid gird-cols-1 lg:grid-cols-12 gap-4'>
        <div className='col-span-12 lg:col-span-7'>
          <div className='bg-primary-dark text-text-light rounded-xl shadow-md p-4 mb-4'>
            <div className='block lg:flex mb-4'>
              <div className='flex items-center justify-center mr-4'>
                {offer.company.logo ? (
                  <Image
                    src={offer.company.logo}
                    alt={offer.company.companyName}
                    width={100}
                    height={100}
                    className='rounded-xl'
                  />
                ) : (
                  <div className='bg-primary rounded-xl p-4'>
                    <Logo color='secondary' />
                  </div>
                )}
              </div>
              <div className='w-full'>
                <h2 className='mb-4'>{offer.title}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 mt-4'>
                  <div className='flex items-center font-medium'>
                    <OfficeIcon color='text-light' />
                    <p className='ml-3'>
                      {offer.company.companyName}
                    </p>
                  </div>
                  <div className='flex'>
                    <SkillsIcon color='text-light' />
                    <p className='ml-3'>{offer.contract}</p>
                  </div>
                  <div className='flex'>
                    <MoneyIcon color='text-light' />
                    <p className='ml-3'>
                      {offer.salary} {offer.currency} /month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className='mb-4 pb-2 border-b border-text-light text-text-light'>
                Locations
              </h3>
              <div className='flex'>
                <div className='ml-3'>
                  {offer.locations.map(
                    (location, index) =>
                      `${location.label}${index + 1 < offer.locations.length ? ' | ' : ''}`
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='bg-secondary-light rounded-xl shadow-md p-4 mb-4'>
            <h3 className='mb-4 pb-2 border-b border-text'>
              Skills
            </h3>
            {offer.skills.map(
              (skill, index) =>
                `${skill.label}${index + 1 < offer.skills.length ? ' | ' : ''}`
            )}
          </div>
          <div className='bg-secondary-light rounded-xl shadow-md p-4 mb-4'>
            <h3 className='mb-4 pb-2 border-b border-text'>
              Description
            </h3>

            <div
              dangerouslySetInnerHTML={{
                __html: offer.description,
              }}
            />
          </div>
          <div className='bg-secondary-light rounded-xl shadow-md p-4'>
            <ApplyForm
              offer={offer._id}
              company={offer.company._id}
            />
          </div>
        </div>
        <div className='col-span-12 lg:col-span-5'>
          <div className='bg-secondary-light rounded-xl shadow-md p-4 min-h-48'>
            <h3 className='mb-4 pb-2 border-b border-text'>
              More from this company
            </h3>
            <Suspense fallback={<Loader />}>
              <MoreOffer offer={offer} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
