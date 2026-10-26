import { site, rooms, faqs, services } from '../lib/site';

// Hotel + FAQPage structured data, generated from the same data the page shows.
const abs = (path) => (path.startsWith('http') ? path : `${site.url}${encodeURI(path)}`);

const hotel = {
  '@type': 'Hotel',
  '@id': `${site.url}/#hotel`,
  name: site.name,
  alternateName: site.shortName,
  description: site.description,
  url: site.url,
  image: [abs(site.heroImage), ...rooms.map((room) => room.image)],
  logo: abs(site.logo),
  telephone: site.phones[0].tel,
  email: site.email,
  priceRange: '$70-$120',
  currenciesAccepted: 'USD',
  numberOfRooms: 15,
  petsAllowed: false,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.mapsUrl,
  sameAs: Object.values(site.social),
  amenityFeature: services.map((name) => ({
    '@type': 'LocationFeatureSpecification',
    name,
    value: true,
  })),
  containsPlace: rooms.map((room) => ({
    '@type': 'HotelRoom',
    name: room.name,
    description: room.description,
    image: room.image,
    url: room.href,
    amenityFeature: room.highlights.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    makesOffer: {
      '@type': 'Offer',
      price: room.from,
      priceCurrency: 'USD',
      url: site.bookingUrl,
    },
  })),
};

const faq = {
  '@type': 'FAQPage',
  '@id': `${site.url}/#faq`,
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function JsonLd() {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': [hotel, faq] }).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}