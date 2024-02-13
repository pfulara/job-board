import OfferCard from './OfferCard';

async function getOffers() {
  const res = await fetch(`${process.env.URL}/api/offers`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Offers() {
  const offers = await getOffers();
  return (
    <div className='p-4'>
      <h2 className='mb-4 pb-4 border-b-2 border-text'>
        My Offers
      </h2>
      <div>
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
}
