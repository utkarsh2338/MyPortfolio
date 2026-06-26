# Portfolio Redesign — "Terminal Aurora"

A complete visual redesign of your portfolio. **No new dependencies** — same stack
(React + Vite + Tailwind + framer-motion + react-icons). Just drop these files into
your repo, replacing the existing ones.

## Files to replace
```
index.html
tailwind.config.js
src/index.css
src/App.jsx
src/components/navbar.jsx
src/components/hero.jsx
src/components/about.jsx
src/components/technologies.jsx
src/components/experience.jsx
src/components/projects.jsx
src/components/contact.jsx
src/components/DarkModeToggle.jsx
```
`src/constants/index.js` is **unchanged** — all your content/links stay the same.

## How to apply
1. Copy the files above into your local clone of `MyPortfolio` (overwrite).
2. `npm install` (no new packages, but safe to run) then `npm run dev` to preview.
3. Commit & push — Vercel will redeploy automatically.

## What changed
- **Design system**: deep-ink dark theme + a real, working light mode via a proper
  `darkMode: 'class'` toggle (the old body-class hack is gone). Default is dark.
- **Typography**: Space Grotesk (display) + Inter (body) + JetBrains Mono (accents).
- **Background**: animated aurora blobs + subtle dot grid, theme-aware.
- **Navbar**: sticky glass bar, monogram logo, animated underlines, mobile menu, resume pill.
- **Hero**: rotating role text, glowing profile card with floating stat badges, and an
  animated stats strip (LeetCode 1872, 1000+ problems, CGPA, projects) with count-up.
- **About**: bento grid (photo + narrative + icon highlight cards).
- **Skills**: infinite logo marquee + grouped category cards with branded tech chips.
- **Experience**: alternating vertical timeline with glowing nodes.
- **Projects**: premium cards, featured first project, image zoom on hover, problem +
  contribution callouts, live/code buttons.
- **Contact**: gradient CTA panel with email/location cards and social grid.
- **Extras**: scroll-progress bar, back-to-top button, custom scrollbar, scroll-reveal
  motion throughout, polished dark/light toggle.

## Notes
- Resume link points to `/updated_resume_27Jan.pdf` (already in your `public/`).
- All social links, project links, and images use your existing assets/constants.
