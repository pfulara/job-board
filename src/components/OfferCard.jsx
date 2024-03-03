import StatusDot from '@/components/StatusDot';
import LocationIcon from '@/icons/LocationIcon';
import SkillsIcon from '@/icons/SkillsIcon';
import OfficeIcon from '@/icons/OfficeIcon';
import Logo from './Logo';
import Image from 'next/image';

export default function OfferCard({
  offer,
  admin = false,
}) {
  const {
    title,
    locations,
    skills,
    status,
    salary,
    company,
    currency,
  } = offer;

  return (
    <div className='border border-text-light shadow-md mb-4 p-4 bg-secondary rounded-md hover:shadow-lg'>
      <div className='block lg:flex gap-4 m-auto'>
        {!admin ? (
          <div>
            {company.logo ? (
              <Image
                src={company.logo}
                alt={company.companyName}
                width={70}
                height={70}
              />
            ) : (
              <div className='bg-secondary-dark rounded-xl px-4 w-fit'>
                <Logo />
              </div>
            )}
          </div>
        ) : null}
        <div className='w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <h3>{title}</h3>
            <div className='flex lg:justify-end font-bold text-lg'>
              {salary} {currency}
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3'>
            {admin ? (
              <div className='flex items-center font-medium'>
                <StatusDot status={status} />
                {status}
              </div>
            ) : (
              <div className='flex items-center font-medium'>
                <OfficeIcon />
                <p className='ml-3'>
                  {company.companyName}
                </p>
              </div>
            )}
            <div className='flex -ml-1'>
              <LocationIcon /> {locations[0].label}
              {locations.length > 1 &&
                `, +${locations.length - 1} locations`}
            </div>
            <div className='flex -ml-1'>
              <SkillsIcon />
              <p className='ml-1'>
                {skills
                  .slice(0, 3)
                  .map(
                    ({ label }, index) =>
                      `${label}${index !== skills.length - 1 ? ', ' : ''}`
                  )}
                {skills.length > 3 &&
                  ` +${skills.length - 3} skills`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
