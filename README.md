# Pre-construction condo site template

A one-page site for Miami-area pre-construction condo projects, built to get
visitors to book a call. Every project's content lives in one file; the
layout is shared.

## Add a new project

1. Copy `src/projects/one-hollywood.ts` to `src/projects/<slug>.ts`.
2. Change `slug` and fill in the content (name, prices, units, amenities,
   location, deposit schedule, FAQ, Calendly link, colors).
3. Put images in `public/` and reference them as `/image.jpg`.
4. Build it: `PROJECT=<slug> npm run build`. The site is in `dist/`.

Each project deploys as its own site (for example on Netlify or Vercel with
the `PROJECT` environment variable set), so each can have its own domain.

## Develop

```sh
npm install
npm run dev                         # builds one-hollywood by default
PROJECT=<slug> npm run dev
```

## Page structure

Hero → key numbers → why this project → residences and prices → amenities →
location → deposit schedule → FAQ → booking (Calendly) → footer with legal
disclaimers. Every call-to-action scrolls to the booking section, and on
phones a sticky "Book a call" bar appears after the hero.

## Tracking

- `utm_*` parameters on the page URL are passed to Calendly, so bookings show
  which ad they came from.
- When someone books, the page pushes `call_booked` to Google Tag Manager's
  `dataLayer` and fires Meta Pixel's `Schedule` event, if either is installed.

## Before going live

Search the project file for `UNVERIFIED` and `PLACEHOLDER` and confirm every
value with the developer's sales team. Only use images you have the rights
to.
