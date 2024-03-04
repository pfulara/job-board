'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import CandidateCard from './CandidateCard';
import LoadingIcon from '@/icons/LoadingIcon';

export default function CandidatesContent() {
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const params = {};
    searchParams.forEach(
      (value, key) => (params[key] = value)
    );
    fetch(`/api/admin/candidates`, {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((data) => {
        setCandidates(data);
        setLoading(false);
      });
  }, [searchParams]);

  return (
    <>
      {isLoading ? (
        <div className='flex flex-cols w-full h-full items-center justify-center'>
          <LoadingIcon />
        </div>
      ) : candidates.length ? (
        candidates.map((candidate) => (
          <CandidateCard
            key={candidate._id}
            candidate={candidate}
          />
        ))
      ) : (
        <div className='text-center mt-4'>
          No candidates to show
        </div>
      )}
    </>
  );
}
