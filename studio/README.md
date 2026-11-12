# Brilliant Lights: Sanity Studio (events and gallery)

The editing screen the school uses to manage **Events** and **Gallery photos**. The website reads this content live.

## One-time setup (do this in the school's own accounts)

1. The school signs up at sanity.io with a Google account (the school owns the account).
2. Create the project at sanity.io/manage ("Create project", dataset `production`) and copy its **Project ID**. Then run
   `npm install` in this `studio/` folder.
3. Paste the Project ID into `sanity.config.ts` and `sanity.cli.ts` (two places).
4. Run `npx sanity deploy`. Sanity asks for a studio hostname, use `brilliantlights`. The school's editing screen is then
   at `https://brilliantlights.sanity.studio`.
5. In sanity.io/manage > API > CORS origins, add the website address (and `http://localhost:5173` while testing). Do **not**
   allow credentials.
6. In the website project, copy `.env.example` to `.env` and set `VITE_SANITY_PROJECT_ID` to the same Project ID.
   On the host (Cloudflare Pages or Netlify) add the same variable and redeploy once.
7. Invite staff: sanity.io/manage > Members > invite their Google emails as **Editor**. Add yourself as **Administrator**.

Until step 6 is done the website shows labelled placeholders, so nothing is broken in the meantime.

## What staff can do

- **Event:** name, date and time, optional place, short description and photo. Events disappear after their day passes.
- **Gallery photo:** a photo plus a caption. Newest photos appear first.

Anything else on the site (About, Admissions, Contact text) is edited by Deolu.
