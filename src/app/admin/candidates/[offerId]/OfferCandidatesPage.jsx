import CandidateCard from '../CandidateCard';

const getCandidates = async (offerId) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/admin/candidates`,
    {
      method: 'POST',
      body: JSON.stringify({ offer: offerId }),
      cache: 'no-store',
    }
  );

  const data = await res.json();

  return data;
};

export default async function OfferCandidatesPage({
  offerId,
}) {
  const candidates = await getCandidates(offerId);
  return (
    <div>
      {candidates.length ? (
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
    </div>
  );
}
