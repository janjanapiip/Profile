# Yuphi Portfolio Site

Single-page portfolio/pricing site for a freelance video editor. Built with **Astro**, **Tailwind CSS v4**, and **TypeScript**, package-managed with **pnpm**.

## Tech Stack

- [Astro](https://astro.build/) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling via `@tailwindcss/vite`
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [pnpm](https://pnpm.io/) — package manager
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — auto-generated `sitemap-index.xml`

## Theming (light / dark)

A light/dark theme toggle lives in the navbar. The preference is stored in
`localStorage` and applied before first paint via an inline script in
`src/layouts/layout.astro` (no flash of the wrong theme). Dark mode is
class-based (`html.dark`) using a Tailwind v4 `@custom-variant`; theme tokens
and the `.glass` surfaces are overridden under `html.dark` in
`src/styles/global.css`. The pastel accent colors stay light on purpose — they
pair with fixed dark text (`text-navy-deep`).

## Follow-ups

- **GIF → video:** the showcase previews in `public/assets/gifs/` (~6 MB) would
  be much smaller as muted, looping `<video>` (MP4/WebM). Transcoding needs
  `ffmpeg` locally, e.g.
  `ffmpeg -i in.gif -movflags +faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" out.mp4`,
  then update `src/components/video-placeholder.astro` to render `<video>`.

## Commands

All commands are run from the root of the project:

| Command            | Action                                           |
| :----------------- | :----------------------------------------------- |
| `pnpm install`     | Install dependencies                             |
| `pnpm run dev`     | Start the development server at `localhost:4321` |
| `pnpm run build`   | Build a static production site to `./dist/`      |
| `pnpm run preview` | Preview the production build locally             |
| `pnpm astro check` | Run type checking and Astro diagnostics          |
| `pnpm run format`  | Format all files with Prettier                   |

## Project Structure

```text
/
├── public/
│   └── assets/              # Static images, SVGs, OG image, favicon
├── scripts/
│   └── generate-favicon.py  # Favicon asset generator
├── src/
│   ├── components/          # Reusable UI components
│   ├── data/
│   │   └── content.ts       # All website copy, pricing, portfolio, order flow
│   ├── layouts/
│   │   └── layout.astro     # Base HTML shell, SEO, JSON-LD, fonts
│   ├── pages/
│   │   ├── index.astro      # Main landing page
│   │   └── 404.astro        # Custom not-found page
│   ├── partials/            # Page-section partials
│   └── styles/
│       └── global.css       # Tailwind v4 entry point, theme tokens, utilities
└── package.json
```

## Conventions

- **Naming style:** ALL files and directories use `kebab-case` (e.g. `order-flow.astro`, `pricing-tier.astro`).
- **Component imports:** When importing kebab-case `.astro` files in frontmatter, alias them as PascalCase variables:

  ```astro
  ---
  import OrderFlow from "../partials/order-flow.astro";
  ---
  ```

- **Copy source:** Keep long copy blocks in `src/data/content.ts`. Avoid hardcoding large content sections directly in `.astro` files.
- **Tailwind v4 tokens:** Theme values are defined in `src/styles/global.css` via `@theme`. Reference them as CSS variables (e.g. `var(--color-sky-soft)`) or use mapped semantic classes like `bg-background`.

## Design System

- **Colors:**
  - Sky soft: `#e5f1fb`
  - Cloud white
  - Navy deep: `#1e2a4a`
  - Pink pastel: `#fad2e1`
  - Yellow soft: `#fff4bd`
  - Blue pale: `#d6ecff`
- **Surfaces:** `glass` (72% white) and `glass-card` (35% white) with `backdrop-filter: blur(16px)`.
- **Typography:**
  - Body: **Nunito Sans**
  - Headings: **Varela Round**
- **Decorative motifs:** Floating clouds, stars, and Cinnamoroll-style cinnamon roll illustrations in `public/assets/`.
- **Border radius:** `--radius-lg: 1.5rem`.

## Content

All website copy, order flow, pricing tiers, portfolio references, and section content live in `src/data/content.ts` and are imported by partials or components.

## Deployment

Run `pnpm run build` to generate a static site in `./dist/`, then deploy the `dist` folder to your preferred host.
