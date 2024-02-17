import { v4 as uuidv4 } from 'uuid';

import Breadcrumb from './Breadcrumb';

import LocationIcon from '@/icons/LocationIcon';
import SkillsIcon from '@/icons/SkillsIcon';
import OfficeIcon from '@/icons/OfficeIcon';
import Logo from '@/components/Logo';

export default function OfferPage({ offer }) {
  return (
    <div className='w-full'>
      <Breadcrumb offer={offer} />
      <div className='grid gird-cols-1 lg:grid-cols-12 gap-4'>
        <div className='col-span-7'>
          <div className='bg-primary-dark text-text-light rounded-xl shadow-md p-4 mb-4 block lg:flex'>
            <div className='flex items-center justify-center mr-4'>
              {offer.logo ? (
                offer.logo
              ) : (
                <div className='bg-primary rounded-xl p-4'>
                  <Logo color='secondary' />
                </div>
              )}
            </div>
            <div className='w-full'>
              <div className='block lg:flex justify-between items-center'>
                <h2 className='mb-4'>{offer.title}</h2>
                <div className='bg-primary p-4 rounded-xl text-lg font-bold w-fit'>
                  {offer.salary} {offer.currency}
                </div>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 mt-4'>
                <div className='flex items-center font-medium'>
                  <OfficeIcon color='text-light' />
                  <p className='ml-3'>
                    {offer.company.companyName}
                  </p>
                </div>
                <div className='flex'>
                  <LocationIcon color='text-light' />
                  <div className='ml-3'>
                    {offer.locations[0].label}
                    {offer.locations.length > 1 &&
                      `, +${offer.locations.length - 1} locations`}
                  </div>
                </div>
                <div className='flex'>
                  <SkillsIcon color='text-light' />
                  <p className='ml-3'>{offer.contract}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-secondary-light rounded-xl shadow-md p-4 mb-4'>
            <h3 className='mb-4 pb-2 border-b border-text'>
              Skills
            </h3>

            {offer.skills.map(({ label }) => {
              const key = uuidv4();
              return <p key={key}>{label}</p>;
            })}
          </div>
          <div className='bg-secondary-light rounded-xl shadow-md p-4'>
            <h3 className='mb-4 pb-2 border-b border-text'>
              Description
            </h3>

            <div
              dangerouslySetInnerHTML={{
                __html: offer.description,
              }}
            />
          </div>
        </div>
        <div className='bg-secondary-light rounded-xl shadow-md p-4 col-span-5'>
          Mapa
        </div>
      </div>
    </div>
  );
}
