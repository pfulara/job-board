import LocationIcon from '@/icons/LocationIcon';
import SkillsIcon from '@/icons/SkillsIcon';

export default function MoreOfferCard({ offer }) {
  return (
    <div className='border border-text rounded-xl p-4 shadow-md hover:shadow-lg bg-secondary mt-4'>
      <div className='flex justify-between mb-2'>
        <h3>{offer.title}</h3>
        <div className='text-lg font-bold'>
          {offer.salary} {offer.currency}/month
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex'>
          <LocationIcon color='text-dark' />{' '}
          {offer.locations[0].label}
          {offer.locations.length > 1 &&
            `, +${offer.locations.length - 1} locations`}
        </div>
        <div className='flex'>
          <SkillsIcon color='text-dark' />
          <p className='ml-1'>
            {offer.skills
              .slice(0, 3)
              .map(
                ({ label }, index) =>
                  `${label}${index !== offer.skills.length - 1 ? ', ' : ''}`
              )}
            {offer.skills.length > 3 &&
              ` +${offer.skills.length - 3} skills`}
          </p>
        </div>
      </div>
    </div>
  );
}
