import { v4 as uuidv4 } from 'uuid';

import Menu from './Menu';
import StatusDot from '@/components/StatusDot';

export default async function SingleOffer({ offer }) {
  const {
    _id,
    title,
    description,
    skills,
    locations,
    status,
    salary,
  } = offer;

  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-5'>
      <div className='bg-secondary-light shadow-md p-4 lg:mb-4 rounded-lg'>
        <Menu offerId={_id} status={status} />
      </div>
      <div className='lg:col-span-4'>
        <div className='bg-secondary-light shadow-md p-4 mb-4 rounded-lg'>
          <div className='block justify-between lg:flex'>
            <h2>{title}</h2>
            <div className='flex items-center'>
              <StatusDot status={status} /> {status}
            </div>
          </div>
          <div>
            <h3 className='mb-4 pb-2 border-b border-text'>
              Locations
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
              {locations.map(({ label }) => {
                const key = uuidv4();
                return <p key={key}>{label}</p>;
              })}
            </div>
          </div>
          <div>
            <h3 className='mt-6 mb-4 pb-2 border-b border-text'>
              Salary
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
              {salary}
            </div>
          </div>
        </div>
        <div className='bg-secondary-light shadow-md p-4 mb-4 rounded-lg'>
          <h3 className='mb-4 pb-2 border-b border-text'>
            Skills
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-4'>
            {skills.map(({ label }) => {
              const key = uuidv4();
              return <p key={key}>{label}</p>;
            })}
          </div>
        </div>
        <div className='bg-secondary-light shadow-md p-4 mb-4 rounded-lg'>
          <h3 className='mb-4 pb-2 border-b border-text'>
            Description
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
      </div>
    </div>
  );
}
