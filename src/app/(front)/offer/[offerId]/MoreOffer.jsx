import NoOffers from '@/components/NoOffers';
import MoreOfferCard from './MoreOfferCard';
import Link from 'next/link';

const getMoreOffer = async (offerId, companyId) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/offers/more-offers/${companyId}/${offerId}`,
    {
      cache: 'no-store',
    }
  );

  return res.json();
};

export default async function MoreOffer({ offer }) {
  const moreOffer = await getMoreOffer(
    offer._id,
    offer.company._id
  );

  return (
    <div className='relative'>
      {!moreOffer.length ? (
        <div className='mt-12'>
          <NoOffers />
        </div>
      ) : (
        moreOffer.map((offer) => (
          <Link
            key={offer._id}
            href={`/offer/${offer._id}`}
          >
            <MoreOfferCard offer={offer} />
          </Link>
        ))
      )}
    </div>
  );
}
