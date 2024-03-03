import { notFound } from 'next/navigation';
import SingleOffer from './SingleOffer';
import EditOffer from './EditOffer';

async function getOffer(id) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/offers/${id}`,
    { cache: 'no-cache' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function OfferWrapper({ params }) {
  const { slug } = params;
  const offer = await getOffer(slug[0]);

  if (!offer._id) notFound();

  if (slug[1] === 'edit')
    return <EditOffer offer={offer} />;

  return <SingleOffer offer={offer} />;
}
