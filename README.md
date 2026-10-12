# Shawn Ethan Varughese — Portfolio

Single-page portfolio built with Next.js 15, React 19 and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3001
npm run build   # production build
```

## Editing content

- All text (projects, experience, skills, contact) lives in `src/lib/constants.ts`.
- Project screenshots live in `public/work/` as `.webp`. Each project lists its slides in `shots`;
  use `fit: "contain"` for charts so they are shown whole on a white background.
- The screenshot carousel is `src/components/ShotSlider.tsx`. It plays while hovered or focused,
  and also supports arrows, dots, arrow keys and swipe. It respects `prefers-reduced-motion`.

## Deploying

Import the GitHub repo at [vercel.com/new](https://vercel.com/new), or run `npx vercel`.
