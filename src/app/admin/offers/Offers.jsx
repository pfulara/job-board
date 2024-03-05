import { cookies } from 'next/headers';

import NoOffers from '@/components/NoOffers';
import OfferCard from '@/components/OfferCard';
import Link from 'next/link';

async function getOffers() {
  const token = cookies()
    .getAll()
    .find(
      (token) =>
        token.name ===
        '__Secure-__Secure-next-auth.session-token'
    )?.value;
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/admin/offers`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify({}),
      cache: 'no-store',
    }
  );

  const data = await res.json();

  return data;
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
            <OfferCard admin offer={offer} />
          </Link>
        ))
      )}
    </div>
  );
}
