// Shape of one project's config. Every page section reads from this,
// so a new pre-construction project only needs a new file in src/projects/.

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
    /** Path under public/, or leave empty for a color gradient. */
    image?: string;
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
      priceFrom: string;
    }[];
    features: string[];
  };
  amenities: { intro: string; items: string[]; image?: string };
  location: {
    intro: string;
    address: string;
    /** Google Maps embed "q" value, usually the address. */
    mapQuery: string;
    nearby: { place: string; time: string }[];
  };
  deposit: { intro: string; steps: { percent: string; when: string }[] };
  team: { role: string; name: string }[];
  faq: { q: string; a: string }[];
  agent: {
    name: string;
    brokerage: string;
    phone?: string;
    email?: string;
    license?: string;
  };
  /** Legal text shown in the footer. */
  disclaimer: string[];
}
