import OfferCard from './OfferCard';

async function getOffers() {
  const res = await fetch(
    `${process.env.URL}/api/admin/offers`
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
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
