# Sneha Maurya — Portfolio

Portfolio site built from [research-website-template](https://github.com/tovacinni/research-website-template), customized with your projects, experience, education, and a **Creatives** section. Soft indigo background, CV/Blog/Creatives links in the sidebar, and a small Snoopy-style friend in the corner.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where to edit content

All content lives in **`src/data/`**:

| File | What to edit |
|------|------------------|
| `aboutme.ts` | Name, title, institution, email, photo (`imageUrl`), CV link (`cvUrl`), Blog link (`blogUrl`), GitHub, LinkedIn |
| `education.ts` | Degrees and schools |
| `experience.ts` | Jobs and roles |
| `portfolio.ts` | **Projects** — title, description, tech, `projectUrl` (live link), `codeUrl` (GitHub) |
| `news.ts` | News items (optional; leave empty to hide) |
| `creatives.ts` | **Creatives** — favourite photos: `{ imageUrl: "/creatives/nyc1.jpg", caption: "Brooklyn Bridge" }` |

- **Profile photo:** Put your image in the project as **`public/photo.jpg`** (or `photo.png`). In `src/data/aboutme.ts`, set `imageUrl: "/photo.jpg"`. If the file is missing, the site shows your initials (e.g. SM) in a pastel box until you add the photo.
- **Logos (Columbia, SRM, workplaces):** Add logo images to **`public/logos/`** — see `public/logos/README.md` for exact filenames (`columbia.png`, `srm.png`, `ibm.png`, `nxp.png`, `columbia-business-school.png`, `metropolis.png`). If a file is missing, that logo is hidden.
- **CV:** Put your PDF in `public/Maurya_Sneha_DS.pdf`; `cvUrl` is already set.
- **Creatives photos:** Add images under `public/creatives/` and add entries to `creativesData` in `src/data/creatives.ts`.

## Structure

- **`src/app/`** — layout, page, globals
- **`src/components/`** — profile, portfolio/experience/education entries, creatives section, Snoopy corner
- **`src/data/`** — all content (aboutme, education, experience, portfolio, news, creatives, section-order)

Publications are removed; the main content block is **Education → Experience → Projects → News (if any) → Creatives**. Sidebar has Blog, CV, and Creatives links.

## Build

```bash
npm run build
npm start
```

## Deploy

Push to GitHub and connect to Vercel (or Netlify); the app is a standard Next.js 15 app.
