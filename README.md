# Brilliant Lights Great School: Starter (5 pages)

Home, About (with leadership profiles), Admissions (information plus a downloadable admission form),
Gallery and Contact. React, TypeScript, Vite, Tailwind CSS, React Router and TanStack Query.

**Events and gallery** are edited by the school in a small Sanity Studio (`studio/`). Everything else (copy, lists,
leadership) lives in `src/data/content.ts` and the files under `src/pages/`, and changes go through Deolu.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks, then builds to dist/
```

## Events and gallery (Sanity)

The Home page "Upcoming events" strip and the Gallery page read from Sanity. Until `VITE_SANITY_PROJECT_ID` is set the site
shows labelled placeholders, so it works with no account. Full setup steps are in `studio/README.md`. In short: the school
creates the Sanity project, you deploy the Studio, add the site to the CORS origins, then put the project ID in `.env`
and on the host. Content lives in the school's own Sanity account, queried with GROQ via `@sanity/client` inside TanStack
Query hooks (`src/lib/queries.ts`). Photos are resized and cropped by Sanity's image CDN (`src/lib/sanity.ts`).

## Before launch

- **School details:** edit `src/lib/school.ts` (name, address, phone, email, WhatsApp link, hours, map).
- **Map:** `mapEmbedSrc` in `src/lib/school.ts` shows Agege for the demo. In Google Maps choose Share, Embed a
  map, and paste the `src` URL of the school's own pin.
- **Admission form:** `public/brilliantlights-admission-form.pdf` is the printable form. Replace the file with the
  school's own form (keep the same filename) and update the return email and WhatsApp number in
  `src/components/AdmissionFormDownload.tsx`. Families return it by email, WhatsApp or at the school office.
- **Photos:** each photo slot is a `<Photo>` component. Pass `src="/images/your-photo.jpg"` (files go in
  `public/images/`). Until then it shows a labelled placeholder.
- **Contact form:** copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to a Formspree or Web3Forms
  form URL. Without it the form runs in demo mode and sends nothing.
- **Leadership:** up to four profiles in `src/data/content.ts`.

## Deploy

Any static host works (Cloudflare Pages, Netlify). Build command `npm run build`, output folder `dist`.
`public/_redirects` makes page links like `/about` work on Netlify and Cloudflare Pages. Register the domain and
hosting in the school's own name and add Deolu as administrator.
# brilliantlightsgreatschool
# brilliantlights
