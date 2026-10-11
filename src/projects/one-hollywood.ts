import type { ProjectConfig } from './types';

// Sources: the developer's Fact Sheet, Brochure and Availability list
// (provided by Mariya, 2026-09-25). Lines marked PLACEHOLDER are estimates
// that are not in those documents; confirm them before running ads.
// Prices change as units sell: update `residences.units` from each new
// availability list.

const project: ProjectConfig = {
  slug: 'one-hollywood',
  name: 'One Hollywood Residences',
  tagline: 'New pre-construction condos in Downtown Hollywood',
  city: 'Hollywood, FL',
  area: 'Downtown Hollywood',
  seo: {
    title: 'One Hollywood Residences | Pre-Construction Condos from $440K',
    description:
      'Studios to 3-bedroom + den pre-construction condos in Downtown Hollywood, FL, from $440K. Book a 15-minute call for current pricing, floor plans and deposit terms.',
  },
  theme: {
    primary: '#c2a077',
    dark: '#10343b',
    light: '#f7f3ee',
  },
  booking: {
    calendlyUrl: 'https://calendly.com/mariya-stoyanova/15min',
    ctaLabel: 'Book a 15-min call',
    heading: 'Get pricing, floor plans and availability',
    subheading:
      'Pick a time that works for you. In 15 minutes we go over current prices, the units still available, the deposit schedule and whether this project fits your goals.',
  },
  hero: {
    image: { file: 'building.jpg', alt: 'Rendering of the 23-story One Hollywood Residences tower surrounded by palm trees' },
    eyebrow: 'Now selling · Downtown Hollywood, FL',
    headline: 'Own a new condo in the heart of Hollywood from $440K',
    subheadline:
      'Studios to 3-bedroom + den residences with wrap-around balconies, a resort-style pool, rooftop lounge and spa, minutes from Hollywood Beach.',
  },
  stats: [
    { value: '$440K', label: 'Starting prices' },
    { value: '23', label: 'Stories' },
    { value: '248', label: 'Residences' },
    { value: 'Studio–3BR', label: 'Floor plans' },
  ],
  highlights: [
    {
      title: 'Steps from Young Circle',
      text: "Walk to ArtsPark, restaurants, concerts and Downtown Hollywood's arts scene, then drive minutes to Hollywood Beach and the Broadwalk.",
    },
    {
      title: 'Between Fort Lauderdale and Miami',
      text: 'Quick access to I-95, Brightline and Fort Lauderdale-Hollywood Airport, with Aventura Mall and Gulfstream Park about 15 minutes south.',
    },
    {
      title: 'Move-in ready, fully finished',
      text: 'European-style kitchens, quartz countertops, washer and dryer, smart home wiring and your choice of flooring come standard.',
    },
  ],
  residences: {
    intro:
      'Studios, 1-bedrooms, and 2- and 3-bedroom + den residences, each with a private terrace. Book a call to get the full floor plans and the current availability list.',
    units: [
      { type: 'Studio', size: '521 sq ft', terrace: '54 sq ft', priceFrom: '$440,500' },
      { type: '1 Bedroom / 1 Bed + Den', size: '785–955 sq ft', terrace: '90–151 sq ft', priceFrom: '$621,500' },
      { type: '2 Bedroom + Den', size: '1,212–1,247 sq ft', terrace: '197–378 sq ft', priceFrom: '$950,000' },
      { type: '3 Bedroom + Den', size: '1,393–1,429 sq ft', terrace: '207–320 sq ft', priceFrom: '$1,137,000' },
    ],
    pricesNote: 'Starting prices from the current availability list. Prices and availability change without notice.',
    features: [
      'Floor-to-ceiling windows',
      'Curved balconies with glass railings',
      'European-style kitchens with quartz countertops',
      'Top-of-the-line appliances and fixtures',
      'Dual vanities and imported porcelain flooring',
      'Washer and dryer in every residence',
      'Prewired smart home technology',
      'Choice of flooring',
    ],
    photos: [
      { file: 'kitchen.jpg', alt: 'Rendering of a kitchen with a wood island, quartz counters and city views' },
      { file: 'balcony-view.jpg', alt: 'Rendering of curved balconies overlooking a golf course and the ocean' },
      { file: 'bathroom.jpg', alt: 'Rendering of a bathroom with dual vanity, backlit mirror and glass shower' },
    ],
  },
  amenities: {
    intro: 'Resort-style amenities, from the porte-cochère arrival to the rooftop lounge.',
    items: [
      'Resort-style pool & spa with cabanas',
      'Rooftop lounge with bar & summer kitchen',
      'Fitness center',
      'Sauna, spa & treatment room',
      "Owners' lounge & private event space",
      'Kids club & playground',
      'Business center',
      'Valet & porte-cochère arrival',
      'Grand lobby with reception',
      'Outdoor BBQ area',
      'EV chargers & bike storage',
      'Pet-friendly',
      'Smart package lockers',
      'Complimentary beach club membership for one year after closing',
    ],
    photos: [
      { file: 'lobby-2.jpg', alt: 'Rendering of the lobby with sculptural pendant lights and reception desk' },
      { file: 'owners-lounge.jpg', alt: "Rendering of the owners' lounge opening onto the pool deck" },
      { file: 'fitness-2.jpg', alt: 'Rendering of the fitness center with treadmills and floor-to-ceiling windows' },
      { file: 'kids-club.jpg', alt: 'Rendering of the kids club with a slide and climbing nooks' },
      { file: 'owners-lounge-dining.jpg', alt: 'Rendering of the private dining room and bar' },
      { file: 'entrance.jpg', alt: 'Rendering of the porte-cochère entrance under a gold screen facade' },
    ],
  },
  location: {
    intro:
      "Downtown Hollywood sits midway between Fort Lauderdale and Miami, with the beach to the east and I-95 and Florida's Turnpike to the west.",
    address: '1817 Taylor Street, Hollywood, FL 33020',
    mapQuery: '1817 Taylor Street, Hollywood, FL 33020',
    photo: { file: 'aerial.jpg', alt: 'Aerial view of Downtown Hollywood showing the building site near Young Circle and the ocean' },
    nearby: [
      { place: 'ArtsPark at Young Circle', time: 'Walk' },
      { place: 'Hollywood Beach & Broadwalk', time: '~5 min' }, // PLACEHOLDER
      { place: 'Fort Lauderdale-Hollywood Airport', time: '~15 min' }, // PLACEHOLDER
      { place: 'Aventura Mall & Gulfstream Park', time: '~15 min' },
      { place: 'Seminole Hard Rock Hotel & Casino', time: '~15 min' }, // PLACEHOLDER
      { place: 'Las Olas Boulevard', time: '~25 min' }, // PLACEHOLDER
    ],
  },
  deposit: {
    intro:
      'Pre-construction purchases are paid in stages, with the balance due at closing. Book a call and I will send you the current deposit schedule.',
    steps: [],
  },
  team: [
    { role: 'Developer', name: 'Star Developers Group' },
    { role: 'Exclusive Sales & Marketing', name: 'Fortune Development Sales' },
    { role: 'Architecture', name: 'BC Architects' },
    { role: 'Interior Design', name: 'Adriana Hoyos Design Studio' },
    { role: 'Landscape Architecture', name: 'Keith Engineering Landscape' },
  ],
  faq: [
    {
      q: 'What does "pre-construction" mean for me as a buyer?',
      a: 'You reserve a residence before the building is finished and pay a deposit in stages. The balance is due at closing when the building is delivered.',
    },
    {
      q: 'Can I rent my unit?',
      a: 'Ask me on the call and I will walk you through the current rental policy from the condominium documents.',
    },
    {
      q: 'Can international buyers purchase?',
      a: 'Yes, foreign buyers can purchase in Florida. Deposit schedules and financing can differ, so book a call and we can go over your situation.',
    },
    {
      q: 'Is there a fee to work with you?',
      a: 'No. As the buyer, you pay nothing for my representation; my commission is paid by the developer.',
    },
    {
      q: 'What happens on the 15-minute call?',
      a: 'We go over your budget and goals, current pricing and availability, and next steps if the project is a fit. No pressure and no obligation.',
    },
  ],
  agent: {
    name: 'Mariya Stoyanova, P.A.',
    brokerage: 'United Realty Group',
    phone: '(646) 678-6477',
    email: '',
    license: '3343472',
    neoKey: '61fc326bb61f9913c09f35b4',
  },
  disclaimer: [
    'This website is operated by an independent licensed real estate agent and is not the official website of the developer. Information is believed accurate but is not guaranteed and is subject to change without notice. Renderings are artist conceptions.',
    'ORAL REPRESENTATIONS CANNOT BE RELIED UPON AS CORRECTLY STATING THE REPRESENTATIONS OF THE DEVELOPER. FOR CORRECT REPRESENTATIONS, MAKE REFERENCE TO THIS BROCHURE AND TO THE DOCUMENTS REQUIRED BY SECTION 718.503, FLORIDA STATUTES, TO BE FURNISHED BY A DEVELOPER TO A BUYER OR LESSEE.',
    'This is not an offer to sell, or solicitation of an offer to buy, in any jurisdiction where prohibited by law. Prices, sizes and features are approximate and subject to change. Equal Housing Opportunity.',
  ],
};

export default project;
