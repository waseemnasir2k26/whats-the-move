# Changelog

All notable changes to this project are documented in this file.

## [2026.09] - 2026-09-16

- Maintenance review of `whats-the-move` — the marketing site for What's The Move, a labor-only moving company serving Charleston County, SC ($50/hr per mover, no deposit, seven days a week).
- Stack: React 18 + Vite 5, Tailwind CSS on a custom navy `#00273d` palette, React Router, Framer Motion and Lucide icons, deployed to Vercel with `vercel.json` handling SPA routing. Interactive pieces include a price Calculator, TruckRecommender, LiveActivity, LiveChat and Marquee components.
- Status: public repo, package version 1.0.0, last commit 2026-04-10 which removed the quote form and pointed every CTA at the contact page. Pages present in `src/pages/` are Home, HowItWorks, ServiceAreas, FAQ, Contact and Roadmap. Real contact details are in `src/data/serviceAreas.js` (the placeholder phone/email the README warns about have already been replaced). No live URL is stated in the repo.
- Reviewed September 2026: documentation refreshed, package version bumped to 1.1.0, released as v2026.09. No component, routing or configuration changes.
- Known gaps visible in the repo: no CHANGELOG before this release, no LICENSE, no tests, and the README is out of date with the code — it still documents a `/quote` page and a Web3Forms setup flow that the April commit removed, still lists "replace placeholder phone + email" as outstanding, and does not mention the `/roadmap` page that exists.
