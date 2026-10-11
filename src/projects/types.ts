// Shape of one project's config. Every page section reads from this,
// so a new pre-construction project only needs a new file in src/projects/.

/**
 * An image file in src/assets/<slug>/, referenced by file name
 * (e.g. 'building.jpg'). Astro resizes and converts it at build time.
 */
export interface Photo {
  file: string;
  alt: string;
}

export interface ProjectConfig {
  slug: string;
  name: string;
  /** Short line under the name in the hero. */
  tagline: string;
  city: string;
  /** Neighborhood or area, e.g. "Downtown Hollywood". */
  area: string;
  seo: { title: string; description: string };
  theme: {
    /** Main brand color (buttons, accents). Any CSS color. */
    primary: string;
    /** Dark background used in hero and footer. */
    dark: string;
    /** Soft background for alternating sections. */
    light: string;
  };
  booking: {
    calendlyUrl: string;
    /** Label on every call-to-action button. */
    ctaLabel: string;
    heading: string;
    subheading: string;
  };
  hero: {
    /** Background photo; without one the hero uses a color gradient. */
    image?: Photo;
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  /** Three or four headline numbers shown under the hero. */
  stats: { value: string; label: string }[];
  highlights: { title: string; text: string }[];
  residences: {
    intro: string;
    units: {
      type: string;
      size: string;
      terrace?: string;
      priceFrom: string;
    }[];
    /** Small print under the price table, e.g. when prices were last updated. */
    pricesNote?: string;
    features: string[];
    photos?: Photo[];
  };
  amenities: { intro: string; items: string[]; photos?: Photo[] };
  location: {
    intro: string;
    address: string;
    /** Google Maps embed "q" value, usually the address. */
    mapQuery: string;
    nearby: { place: string; time: string }[];
    photo?: Photo;
  };
  /** Leave steps empty to show a "get the deposit schedule on a call" card instead. */
  deposit: { intro: string; steps: { percent: string; when: string }[] };
  team: { role: string; name: string }[];
  faq: { q: string; a: string }[];
  agent: {
    name: string;
    brokerage: string;
    phone?: string;
    email?: string;
    license?: string;
    /** NewEstateOnly agent key; when set, the site gets a /new-developments page. */
    neoKey?: string;
  };
  /** Legal text shown in the footer. */
  disclaimer: string[];
}
