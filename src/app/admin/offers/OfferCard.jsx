import React from 'react';
import Link from 'next/link';

import StatusDot from '@/components/StatusDot';
import LocationIcon from '@/icons/LocationIcon';
import SkillsIcon from '@/icons/SkillsIcon';

export default function OfferCard({ offer }) {
  const { id, title, locations, skills, status, salary } =
    offer;
  return (
    <Link href={`/admin/offers/${id}`}>
      <div className='border border-text-light shadow-md mb-4 p-4 bg-secondary rounded-md'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <h3>{title}</h3>
          <div className='flex lg:justify-end font-bold text-lg'>
            {salary}
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='flex items-center font-medium'>
            <StatusDot status={status} />
            {status}
          </div>
          <div className='flex -ml-1'>
            <LocationIcon /> {locations[0]}
            {locations.length > 1 &&
              `, +${locations.length - 1} locations`}
          </div>
          <div className='flex -ml-1'>
            <SkillsIcon />
            {skills
              .slice(0, 3)
              .map(
                (skill, index) =>
                  `${skill}${index !== skills.length - 1 ? ', ' : ''}`
              )}
            {skills.length > 3 &&
              ` +${skills.length - 3} skills`}
          </div>
        </div>
      </div>
    </Link>
  );
}
