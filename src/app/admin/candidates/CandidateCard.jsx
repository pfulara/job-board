import Link from 'next/link';
import React from 'react';
import moment from 'moment';

export default function CandidateCard({ candidate }) {
  return (
    <Link href={`/admin/candidate/${candidate._id}`}>
      <div className='bg-secondary-light p-4 rounded-xl shadow-md hover:shadow-lg'>
        <div className='flex justify-between'>
          <div className='block lg:flex justify-between items-end gap-4'>
            <h3>{candidate.name}</h3>
            <p className='pb-1'>{candidate.email}</p>
          </div>

          {candidate.unread && (
            <div className='border border-success bg-success-light text-success-dark px-2 py-1 rounded-xl h-fit'>
              New
            </div>
          )}
        </div>
        <div className='block lg:flex justify-between mt-2'>
          <p>{candidate.offer.title}</p>
          <p>
            {moment(candidate.createdAt).format(
              'DD-MM-YYYY HH:mm'
            )}
          </p>
        </div>
      </div>
    </Link>
  );
}
