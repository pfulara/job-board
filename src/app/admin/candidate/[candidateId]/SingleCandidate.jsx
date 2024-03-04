import { notFound } from 'next/navigation';

import Breadcrumb from './Breadcrumb';
import DownloadCV from './DownloadCV';

const getCandidate = async (candidateId) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/admin/get-candidate`,
    {
      method: 'POST',
      body: JSON.stringify({ candidateId }),
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  return data;
};

export default async function SingleCandidate({
  candidateId,
}) {
  const candidate = await getCandidate(candidateId);

  return (
    <>
      <div className='bg-secondary rounded-xl shadow-md p-4 mb-4'>
        <Breadcrumb offer={candidate.offer} />
      </div>
      <div className='bg-secondary rounded-xl shadow-md p-4'>
        <div className='mb-2 border-b block lg:flex justify-between'>
          <h2 className='mb-4'>{candidate.name}</h2>
          <DownloadCV
            file={candidate.cv}
            name={candidate.name}
          />
        </div>

        <p className='my-2'>{candidate.email}</p>
        <p>{candidate.message}</p>
      </div>
    </>
  );
}
