import type { ProjectConfig } from './types';

// Facts below come from public sources gathered 2026-09-25 and are NOT
// verified with the developer. Lines marked UNVERIFIED or PLACEHOLDER must be
// confirmed before this site runs ads.
// Sources: onehollywoodresidences.com, floridayimby.com (Jun 2024), livabl.com

const project: ProjectConfig = {
  slug: 'one-hollywood',
  name: 'One Hollywood Residences',
  tagline: 'New pre-construction condos in Downtown Hollywood',
  city: 'Hollywood, FL',
  area: 'Downtown Hollywood',
  seo: {
    title: 'One Hollywood Residences | Pre-Construction Condos from the Mid $400s',
    description:
      'Studios to 3-bedroom pre-construction condos in Downtown Hollywood, FL. Book a 15-minute call for current pricing, floor plans and deposit terms.',
  },
  theme: {
    primary: '#c8a45c',
    dark: '#0f1c2e',
    light: '#f6f3ee',
  },
  booking: {
    calendlyUrl: 'https://calendly.com/mariya-stoyanova/15min',
    ctaLabel: 'Book a 15-min call',
    heading: 'Get pricing, floor plans and availability',
    subheading:
      'Pick a time that works for you. In 15 minutes we go over current prices, the units still available, the deposit schedule and whether this project fits your goals.',
  },
  hero: {
    image: '',
    eyebrow: 'Now selling · Downtown Hollywood, FL',
    headline: 'Own a new condo in the heart of Hollywood from the mid $400s',
    subheadline:
      'Studios to 3-bedroom residences with floor-to-ceiling windows, a resort-style pool and rooftop lounge, minutes from Hollywood Beach.',
  },
  stats: [
    { value: 'Mid $400s', label: 'Starting prices' }, // UNVERIFIED
    { value: '22', label: 'Stories' }, // UNVERIFIED (Florida YIMBY)
    { value: '248', label: 'Residences' }, // UNVERIFIED (Florida YIMBY)
    { value: '2027–28', label: 'Est. completion' }, // UNVERIFIED: sources disagree
  ],
  highlights: [
    {
      title: 'Walk to ArtsPark and Young Circle',
      text: 'Restaurants, concerts and the Downtown Hollywood arts district right outside your door.',
    },
    {
      title: 'Minutes to the beach',
      text: 'A short drive to Hollywood Beach and the Broadwalk, with Fort Lauderdale and Miami within easy reach.',
    },
    {
      title: 'Rental friendly',
      text: 'Owners can rent their units, subject to association rules. Ask on the call for the current rental policy.', // UNVERIFIED: restrictions unknown
    },
  ],
  residences: {
    intro:
      'Eleven floor plans from efficient studios to family-sized 3-bedrooms. Book a call to get the full floor plan set and the current price list.', // UNVERIFIED: plan count
    // UNVERIFIED: size range 517–1,429 sq ft from public listings; per-type
    // splits and prices below are PLACEHOLDER estimates.
    units: [
      { type: 'Studio', size: '517+ sq ft', priceFrom: 'Mid $400s' },
      { type: '1 Bedroom', size: 'PLACEHOLDER', priceFrom: 'PLACEHOLDER' },
      { type: '2 Bedroom', size: 'PLACEHOLDER', priceFrom: 'PLACEHOLDER' },
      { type: '3 Bedroom', size: 'Up to 1,429 sq ft', priceFrom: 'PLACEHOLDER' },
    ],
    features: [
      'Floor-to-ceiling windows',
      'Balconies with glass railings',
      'Smart home technology',
      'Customizable finishes',
      'City and ocean views from select units',
    ],
  },
  amenities: {
    intro: 'Resort-style amenities without leaving the building.',
    items: [
      'Resort-style pool',
      'Rooftop lounge and garden',
      'Fitness center',
      'Co-working spaces',
    ],
  },
  location: {
    intro:
      'Downtown Hollywood sits between Fort Lauderdale and Miami, with the beach to the east and I-95 to the west.',
    address: '1817 Taylor Street, Hollywood, FL 33020', // UNVERIFIED: site address per Florida YIMBY
    mapQuery: '1817 Taylor Street, Hollywood, FL 33020',
    // PLACEHOLDER: approximate drive times, not measured
    nearby: [
      { place: 'ArtsPark at Young Circle', time: 'Walk' },
      { place: 'Hollywood Beach', time: '~5 min' },
      { place: 'Fort Lauderdale Airport (FLL)', time: '~15 min' },
      { place: 'Aventura Mall', time: '~15 min' },
      { place: 'Downtown Miami', time: '~35 min' },
    ],
  },
  deposit: {
    intro:
      'Pre-construction purchases are paid in stages, with most of the price due at closing.',
    // PLACEHOLDER: typical South Florida schedule, not this project's terms
    steps: [
      { percent: '10%', when: 'At reservation / contract' },
      { percent: '10%', when: 'At groundbreaking' },
      { percent: '10%', when: 'At top-off' },
      { percent: '70%', when: 'At closing' },
    ],
  },
  team: [
    { role: 'Developer', name: 'Star Developers Group' }, // UNVERIFIED
    { role: 'Sales & Marketing', name: 'Fortune Development Sales' }, // UNVERIFIED
  ],
  faq: [
    {
      q: 'What does "pre-construction" mean for me as a buyer?',
      a: 'You reserve a unit before the building is finished, usually at a lower price than after completion, and pay a deposit in stages. The balance is due at closing when the building is delivered.',
    },
    {
      q: 'Can I rent my unit?',
      a: 'Rentals are allowed subject to the association rules. On the call I can walk you through the current rental policy.',
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
  },
  disclaimer: [
    'This website is operated by an independent licensed real estate agent and is not the official website of the developer. Information is believed accurate but is not guaranteed and is subject to change without notice.',
    'ORAL REPRESENTATIONS CANNOT BE RELIED UPON AS CORRECTLY STATING THE REPRESENTATIONS OF THE DEVELOPER. FOR CORRECT REPRESENTATIONS, MAKE REFERENCE TO THIS BROCHURE AND TO THE DOCUMENTS REQUIRED BY SECTION 718.503, FLORIDA STATUTES, TO BE FURNISHED BY A DEVELOPER TO A BUYER OR LESSEE.',
    'Renderings, prices, sizes and features are approximate and subject to change. This is not an offer to sell, or solicitation of an offer to buy, in any jurisdiction where prohibited by law.',
  ],
};

export default project;
