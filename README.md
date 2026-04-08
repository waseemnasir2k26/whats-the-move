# What's The Move — Charleston Labor-Only Movers

Marketing site for **What's The Move**, a labor-only moving company serving Charleston County, SC. $50/hr per mover, no deposit, 7 days a week.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS** (custom navy `#00273d` palette)
- **React Router** (6 pages)
- **Framer Motion** (subtle entrance animations)
- **Lucide React** (icons)
- **Web3Forms** for the quote form (no backend required)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Pages

- `/` — Home (hero, value prop, how it works, areas, social proof, CTA)
- `/how-it-works` — Pricing breakdown + cost comparison + 5-step process
- `/service-areas` — Every Charleston County neighborhood we serve
- `/faq` — 12 common questions
- `/quote` — Multi-field quote form (contact + addresses + property + inventory)
- `/contact` — Phone, email, hours, service area

## Configuration before launch

Edit `src/data/serviceAreas.js`:
- Replace placeholder phone (`(843) 555-0100`) with the real number
- Replace placeholder email (`hello@whatsthemovecharleston.com`)
- Adjust `serviceAreas` list if needed

## Quote form setup (Web3Forms)

The quote form uses [Web3Forms](https://web3forms.com) — free, no signup, just an access key emailed to you.

1. Visit https://web3forms.com and grab a free access key
2. Add it to Vercel environment variables: `VITE_WEB3FORMS_KEY`
3. Or copy `.env.example` → `.env` locally and paste the key

Form submissions email straight to the address you registered with Web3Forms.

## Booking sync (optional)

To add a Calendly booking widget, drop this into any page (recommended: Quote or Contact):

```jsx
<div className="calendly-inline-widget"
     data-url="https://calendly.com/your-username/30min"
     style={{ minWidth: '320px', height: '700px' }} />
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import the repo
4. Build command: `npm run build` (auto-detected)
5. Output dir: `dist` (auto-detected)
6. Add env var `VITE_WEB3FORMS_KEY` with your key
7. Deploy

The included `vercel.json` handles SPA routing.

## Color system

- **Navy** `#00273d` — primary
- **White** `#ffffff` — backgrounds
- **Black** `#000000` — text accents

All defined as `navy.*` shades in `tailwind.config.js`.

## Things to add post-launch

- [ ] Replace placeholder phone + email
- [ ] Add real Google reviews / testimonials
- [ ] Upload client logo SVG to `/public/logo.svg` (current is a placeholder)
- [ ] Add Google Analytics / Meta Pixel
- [ ] Connect domain in Vercel
- [ ] Calendly embed for booking sync
- [ ] Submit sitemap to Google Search Console
- [ ] Create Google Business Profile
