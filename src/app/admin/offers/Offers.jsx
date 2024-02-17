import NoOffers from '@/components/NoOffers';
import OfferCard from '@/components/OfferCard';
import Link from 'next/link';

async function getOffers() {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/admin/offers`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Offers() {
  const offers = await getOffers();
  return (
    <div>
      {!offers.length ? (
        <NoOffers />
      ) : (
        offers?.map((offer) => (
          <Link
            key={offer._id}
            href={`/admin/offers/${offer._id}`}
          >
            <OfferCard offer={offer} />
          </Link>
        ))
      )}
    </div>
  );
}
