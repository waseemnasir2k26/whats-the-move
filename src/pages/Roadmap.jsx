import { Link } from 'react-router-dom'
import {
  ArrowRight, Phone, TrendingUp, Target, Zap, Shield,
  Check, X, Clock, Calendar, MapPin, Star, Users, BarChart3,
  Camera, FileText, MessageSquare, Gift, MousePointerClick, Megaphone,
  Sparkles, Rocket, DollarSign,
} from 'lucide-react'
import { contact } from '../data/serviceAreas'

/* ---------- Strengths (what's working) ---------- */
const strengths = [
  {
    title: 'Conversion-focused homepage',
    desc: "Hero anchors on $50/hr + 7-day availability + sample $200 quote. Most movers hide pricing behind a phone call — you lead with it.",
  },
  {
    title: 'Four interactive tools built-in',
    desc: "Live price calculator, truck size recommender, chat widget, and live-activity proof toasts. Competitors in Charleston have none of these.",
  },
  {
    title: 'Six-page site structure',
    desc: "Home, How It Works, Service Areas, FAQ, Quote, Contact — every step of the buyer's journey covered without bloat.",
  },
  {
    title: 'Strong brand foundation',
    desc: "Navy / white / emerald palette, Space Grotesk display font, oversized headlines, bento grid. Premium without being stuffy.",
  },
  {
    title: 'Technical SEO fundamentals',
    desc: "Schema.org MovingCompany JSON-LD, sitemap.xml, robots.txt, OG tags, semantic headings — all in place.",
  },
  {
    title: 'Quote form captures crew-sizing data',
    desc: "Pickup, drop-off, date, home size, floors, stairs/elevator, furniture, box count — everything a crew chief needs, no callback required.",
  },
]

/* ---------- Gaps (what's broken) ---------- */
const gaps = [
  {
    title: 'No real reviews or social proof',
    desc: "Zero Google, Yelp, or Facebook reviews. Prospects will Google the name, find nothing, and bounce.",
  },
  {
    title: 'Placeholder contact info',
    desc: "Phone and email are currently dummies. Every CTA on the site leads nowhere until this is fixed.",
  },
  {
    title: 'No Google Business Profile',
    desc: "GBP is the #1 ranking factor for local service. No profile = invisible in the 'movers near me' map pack.",
  },
  {
    title: 'No neighborhood landing pages',
    desc: "All 14 areas share one page. Should be 14 individual URLs (/movers/mount-pleasant etc.) to rank for each.",
  },
  {
    title: 'No calendar booking',
    desc: "Forms convert at 5–10%. Calendar 'pick your slot' widgets convert at 20–30%. Biggest single lever.",
  },
  {
    title: 'No real photos or team identity',
    desc: "Stock illustrations only. No crew photos, no owner story, no license/insurance badges.",
  },
  {
    title: 'No blog / content engine',
    desc: "Zero SEO articles = zero compounding organic traffic. Highest-ROI long-term play is missing.",
  },
  {
    title: 'No analytics installed',
    desc: "No GA4, no Meta Pixel, no Clarity. Flying blind — can't see what's converting.",
  },
  {
    title: 'No mobile sticky CTA',
    desc: "70% of traffic is mobile. No persistent 'Call / Quote' button as users scroll costs 10–20% of conversions.",
  },
  {
    title: 'Chat widget is static',
    desc: "Charlie is a decision tree — not connected to SMS, inbox, or CRM. Chat leads currently go nowhere.",
  },
]

/* ---------- Top 15 improvements ---------- */
const improvements = [
  {
    num: 1,
    title: 'Build 14 neighborhood landing pages',
    impact: 'HIGH', effort: 'MEDIUM', priority: 'P0',
    icon: MapPin,
    problem: 'All 14 Charleston neighborhoods share one page. Google can\'t rank a single URL for 14 different "movers in [neighborhood]" queries — forces you to pick one and loses the rest.',
    solution: 'Programmatic /movers/[slug] template. Each page: neighborhood hero image, local landmarks, average job size, 3 sample quotes, customer reviews from that ZIP. Link all 14 from footer.',
    lift: '30–60 new keyword rankings in 60 days. Primary driver of organic leads by day 90.',
  },
  {
    num: 2,
    title: 'Google Business Profile + review engine',
    impact: 'HIGH', effort: 'LOW', priority: 'P0',
    icon: Star,
    problem: 'No GBP means invisible in the "movers near me" map pack — which gets 44% of local service clicks. Competitors with 30+ reviews will dominate regardless of how pretty this site is.',
    solution: 'Claim and verify GBP. Add photos, hours, services. Install review-request automation (free: Google review links via SMS after every job; or paid NiceJob/Podium ~$99/mo).',
    lift: 'First 10 reviews lift map-pack rankings 2–3 positions. Target 50+ reviews in 90 days.',
  },
  {
    num: 3,
    title: 'Replace placeholder contact info',
    impact: 'HIGH', effort: 'LOW', priority: 'P0',
    icon: Phone,
    problem: 'Real contact info is now live — (843) 471-0287 and info@whatsthemove843.com. This item is complete.',
    solution: 'Done — phone, email, and Schema.org JSON-LD all updated site-wide.',
    lift: 'Lead channel is now active. Consider adding a Twilio/OpenPhone SMS line for text-to-quote.',
  },
  {
    num: 4,
    title: 'Calendar booking ("pick your slot")',
    impact: 'HIGH', effort: 'MEDIUM', priority: 'P0',
    icon: Calendar,
    problem: 'Forms convert at 5–10%. Calendar widgets convert at 20–30% because they remove the "will they call me back?" uncertainty that kills 60% of mobile visitors.',
    solution: 'Cal.com (free) or SavvyCal embed on /quote: "Pick a time for a 10-min quote call." Owner blocks slots in Google Calendar. Zero friction.',
    lift: '2–3x conversion rate on the quote page. Biggest single conversion lever.',
  },
  {
    num: 5,
    title: 'Install full analytics stack',
    impact: 'HIGH', effort: 'LOW', priority: 'P0',
    icon: BarChart3,
    problem: 'Without data, every improvement is a guess. No GA4, no Meta Pixel, no Clarity means no way to know what works.',
    solution: 'Install all four in one afternoon: GA4, Meta Pixel, Microsoft Clarity, Google Tag Manager. Fire events on calculator_use, chat_open, quote_submit, phone_click.',
    lift: 'Enables every downstream decision. Also enables retargeting ads later.',
  },
  {
    num: 6,
    title: 'Real photos + "Meet the crew" page',
    impact: 'HIGH', effort: 'LOW', priority: 'P1',
    icon: Camera,
    problem: 'Trust is the #1 blocker for labor-only movers. Prospects are inviting strangers into their home. Stock illustrations don\'t solve this — faces do.',
    solution: 'One Saturday, phone camera: crew in uniform, truck if any, real move in progress, 10–15 before/afters. /about page with owner story + crew bios + license/insurance badges.',
    lift: 'Typically lifts quote-page conversion 15–25%. Bigger effect on $400+ jobs.',
  },
  {
    num: 7,
    title: 'Multi-step quote form',
    impact: 'HIGH', effort: 'LOW', priority: 'P1',
    icon: MousePointerClick,
    problem: 'Current form is one long page with 15+ fields. Mobile users see a wall of labels and bounce. Single-page long-form conversion ~5%.',
    solution: 'Split into 4 steps. Step 1: home size + date (90% completion). Step 2: addresses. Step 3: furniture + stairs. Step 4: contact. Progress bar at top. Still submits to Web3Forms.',
    lift: 'Typically doubles form completion rate. ~5% → ~10%.',
  },
  {
    num: 8,
    title: 'Sticky mobile Call/Quote bar',
    impact: 'MEDIUM', effort: 'LOW', priority: 'P1',
    icon: Phone,
    problem: '70% of traffic is mobile. As users scroll past the hero, there\'s no persistent CTA — they have to scroll all the way back up.',
    solution: 'Fixed bar at bottom of mobile viewport: "Call" on left (tel:), "Get Quote" on right. Only shows on mobile, only after 400px scroll.',
    lift: '10–20% lift on mobile conversions. Two hours to ship.',
  },
  {
    num: 9,
    title: 'Blog + 5 cornerstone articles',
    impact: 'HIGH', effort: 'MEDIUM', priority: 'P1',
    icon: FileText,
    problem: 'Zero content = zero long-tail SEO traffic. A blog is the cheapest compounding lead source for any local service business.',
    solution: '5 Charleston-specific articles: (1) How much do movers cost in Charleston? (2) Best time of year to move (3) Charleston moving checklist (4) Moving in downtown (narrow streets/no parking) (5) Labor-only vs full-service comparison.',
    lift: '500–2,000 monthly organic visitors by month 6. Compounds forever.',
  },
  {
    num: 10,
    title: 'Lead magnet PDF + email drip',
    impact: 'MEDIUM', effort: 'LOW', priority: 'P1',
    icon: Gift,
    problem: 'Only conversion action is "get a quote" — high commitment for someone 4 weeks out. Need a lower-commitment email capture.',
    solution: 'Branded "60-Day Charleston Move Checklist" PDF. Gated email capture. Drip 5-email sequence ending with 10% off coupon. Email list that compounds monthly.',
    lift: 'Captures 3–5x more emails than a quote form alone. Long-term list asset.',
  },
  {
    num: 11,
    title: 'Connect chat widget to SMS / CRM',
    impact: 'MEDIUM', effort: 'MEDIUM', priority: 'P1',
    icon: MessageSquare,
    problem: '"Charlie" only runs a decision tree. Any lead that chats literally goes nowhere — it\'s a demo.',
    solution: 'Option A (cheap): pipe chats into Slack/SMS via Vercel serverless function. Option B (better): GoHighLevel, Close, or Trello board — every chat = trackable lead.',
    lift: 'Recovers 100% of currently-lost chat leads. Enables follow-ups on no-shows.',
  },
  {
    num: 12,
    title: 'Military / student / senior pages',
    impact: 'MEDIUM', effort: 'LOW', priority: 'P2',
    icon: Users,
    problem: 'Charleston has 3 massive feeder populations: Joint Base Charleston (military), College of Charleston + MUSC (students), and retirees. Generic pricing doesn\'t speak to them.',
    solution: '/military-movers-charleston (10% discount, PCS-friendly). /student-movers-charleston (dorm specials). /senior-movers-charleston (extra care + AARP discount). Each ranks for its own cluster.',
    lift: '20–40% more qualified leads from these segments. Low effort, high precision.',
  },
  {
    num: 13,
    title: 'Referral program ($25 / $25)',
    impact: 'MEDIUM', effort: 'LOW', priority: 'P2',
    icon: Gift,
    problem: 'Happy customers tell other movers — but only if you ask. No referral mechanic in place.',
    solution: '/refer page + footer link. "Refer a friend who books = $25 Venmo to you, $25 off their move." Track via referral code. Promote in every post-move email.',
    lift: '10–15% of all new bookings typically come from referral programs.',
  },
  {
    num: 14,
    title: 'Exit-intent popup + limited offer',
    impact: 'MEDIUM', effort: 'LOW', priority: 'P2',
    icon: Zap,
    problem: '90% of first-time visitors leave without converting. Exit-intent popups recover a measurable slice before they\'re gone forever.',
    solution: 'Mouse-leave on desktop + 30s scroll-up on mobile. Popup: "Book this week and get your first hour free." Captures email or sends to quote form.',
    lift: 'Recovers 2–4% of abandoning visitors. 15–20 extra leads/month at scale.',
  },
  {
    num: 15,
    title: 'Paid ads: Meta + Google LSA',
    impact: 'HIGH', effort: 'MEDIUM', priority: 'P2',
    icon: Megaphone,
    problem: 'Once the site converts and GBP is stacked with reviews, paid ads become profitable. Starting before that = burning money.',
    solution: 'After 50+ GBP reviews: launch Google Local Services Ads (pay-per-lead, above map pack) + Meta retargeting. $500/mo start, scale to $2–5k/mo based on CPL.',
    lift: 'LSA hits $30–60 cost per lead. At 30% close × $300 avg = 3–5x ROAS.',
  },
]

/* ---------- 90-day roadmap ---------- */
const roadmap = [
  {
    weeks: 'Week 1',
    focus: 'Foundations',
    color: 'red',
    items: [
      'Replace placeholder phone / email',
      'Claim Google Business Profile',
      'Install GA4, Meta Pixel, Clarity, GTM',
      'Connect quote form to real inbox',
    ],
  },
  {
    weeks: 'Weeks 2–3',
    focus: 'Local SEO moat',
    color: 'amber',
    items: [
      'Build /movers/[slug] template',
      'Write 14 unique neighborhood pages',
      'Submit sitemap to Google Search Console',
      'Request first reviews from past customers',
    ],
  },
  {
    weeks: 'Weeks 4–6',
    focus: 'Conversion optimization',
    color: 'emerald',
    items: [
      'Cal.com calendar booking on /quote',
      'Multi-step form refactor',
      'Sticky mobile CTA bar',
      'Real photos + /about page',
    ],
  },
  {
    weeks: 'Weeks 7–9',
    focus: 'Trust & content',
    color: 'navy',
    items: [
      'Launch /blog',
      'Publish 5 cornerstone articles',
      'Lead magnet PDF + drip email',
      'Connect chat widget to SMS/CRM',
    ],
  },
  {
    weeks: 'Weeks 10–12',
    focus: 'Revenue multipliers',
    color: 'purple',
    items: [
      'Military / student / senior pages',
      'Referral program',
      'Exit-intent popup',
      'Launch Google Local Services Ads',
    ],
  },
]

/* ---------- Revenue projections ---------- */
const projections = [
  { stage: 'Baseline (today)', leads: '~45', close: '30%', jobs: '~13', ticket: '$300', rev: '$4,000', highlight: false },
  { stage: '30 days',          leads: '~65', close: '32%', jobs: '~21', ticket: '$305', rev: '$6,400', highlight: false },
  { stage: '60 days',          leads: '~95', close: '33%', jobs: '~31', ticket: '$310', rev: '$9,600', highlight: false },
  { stage: '90 days',          leads: '~115', close: '35%', jobs: '~40', ticket: '$315', rev: '$12,600', highlight: true },
  { stage: '6 months',         leads: '~180', close: '38%', jobs: '~68', ticket: '$325', rev: '$22,100', highlight: true },
]

/* ---------- Moats ---------- */
const moats = [
  {
    icon: Star,
    title: 'Review Moat',
    desc: 'Once you hit 50+ real Google reviews, map-pack rankings are extremely hard to dislodge. Competitors would need 6+ months of consistent review velocity to catch up.',
  },
  {
    icon: Target,
    title: 'Local SEO Moat',
    desc: 'By month 6, if the site has 14 neighborhood pages + 20+ blog posts all interlinking, no competitor can catch up without 6–12 months of content work.',
  },
  {
    icon: BarChart3,
    title: 'Data Moat',
    desc: 'Every visitor who downloads the PDF joins an owned email list. That list compounds monthly and is impossible for competitors to access.',
  },
  {
    icon: Sparkles,
    title: 'Brand Moat',
    desc: '"Charlie" the chat bot, the navy + emerald palette, the calculator-first pricing — these turn a generic mover into a recognizable local brand = pricing power.',
  },
]

/* ---------- Badge helpers ---------- */
function ImpactBadge({ value }) {
  const colorMap = {
    HIGH: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    MEDIUM: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    LOW: 'bg-gray-500/10 text-gray-700 border-gray-500/20',
  }
  return (
    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${colorMap[value]}`}>
      Impact · {value}
    </span>
  )
}

function EffortBadge({ value }) {
  const colorMap = {
    LOW: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    MEDIUM: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    HIGH: 'bg-red-500/10 text-red-700 border-red-500/20',
  }
  return (
    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${colorMap[value]}`}>
      Effort · {value}
    </span>
  )
}

function PriorityBadge({ value }) {
  const colorMap = {
    P0: 'bg-red-500 text-white',
    P1: 'bg-amber-500 text-white',
    P2: 'bg-navy text-white',
  }
  return (
    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${colorMap[value]}`}>
      {value}
    </span>
  )
}

/* ---------- Main page ---------- */
export default function Roadmap() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl" />

        <div className="container section relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Rocket size={14} /> Strategic Growth Plan
            </div>
            <h1 className="h-display">
              From demo site<br />
              <span className="text-white/50">to market-dominant</span><br />
              lead machine.
            </h1>
            <p className="mt-8 text-xl text-white/70 leading-relaxed max-w-2xl">
              15 improvements ranked by impact. A 90-day execution plan. 4 strategic moats. Target: 2–3x booked jobs in 90 days, 5x in 6 months — with zero paid ad spend.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-3xl font-bold font-display text-emerald-400">15</div>
                <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Improvements mapped</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-3xl font-bold font-display text-emerald-400">90</div>
                <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Day execution window</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-3xl font-bold font-display text-emerald-400">5x</div>
                <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Revenue target (6mo)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="section bg-white border-b border-navy/10">
        <div className="container max-w-4xl">
          <div className="eyebrow">Executive summary</div>
          <h2 className="h-section mt-3">Where we are vs. where we're going.</h2>
          <p className="mt-6 text-lg text-navy/70 leading-relaxed">
            The current site is already ahead of 90% of labor-only moving competitors in Charleston — conversion-focused structure, live calculator, truck recommender, AI-style chat, responsive brand design. <b className="text-navy">That's the good news.</b>
          </p>
          <p className="mt-4 text-lg text-navy/70 leading-relaxed">
            The bad news: a beautiful website doesn't automatically rank, convert, or scale. To go from "demo" to <b className="text-navy">a lead machine that compounds every month</b>, the site needs three things it doesn't yet have: <b className="text-navy">trust signals</b> (reviews, photos, identity), <b className="text-navy">local SEO horsepower</b> (neighborhood landing pages + Google Business Profile), and <b className="text-navy">friction removal</b> (calendar booking, SMS quotes, mobile-first CTAs).
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="bg-navy text-white p-6 rounded-2xl">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Current state</div>
              <div className="mt-2 text-3xl font-bold font-display">~$4k<span className="text-base font-normal text-white/50">/mo</span></div>
              <div className="text-xs text-white/50 mt-1">Assumed baseline</div>
            </div>
            <div className="bg-navy text-white p-6 rounded-2xl">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">90-day target</div>
              <div className="mt-2 text-3xl font-bold font-display">$7.5–11k<span className="text-base font-normal text-white/50">/mo</span></div>
              <div className="text-xs text-white/50 mt-1">2–3x baseline</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-2xl">
              <div className="text-xs font-bold text-white/80 uppercase tracking-wider">6-month target</div>
              <div className="mt-2 text-3xl font-bold font-display">$15–22k<span className="text-base font-normal text-white/70">/mo</span></div>
              <div className="text-xs text-white/80 mt-1">4–5x baseline</div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIT */}
      <section className="section bg-navy-50/40 border-b border-navy/10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Current state audit</div>
            <h2 className="h-section mt-3">What's working · What's broken.</h2>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="bg-white border border-emerald-500/20 rounded-2xl p-7">
              <div className="flex items-center gap-2 text-emerald-600">
                <Check size={18} strokeWidth={3} />
                <div className="text-xs font-bold uppercase tracking-widest">6 things working</div>
              </div>
              <ul className="mt-6 space-y-5">
                {strengths.map((s, i) => (
                  <li key={i}>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <div>
                        <div className="font-semibold text-navy text-sm">{s.title}</div>
                        <div className="text-xs text-navy/60 mt-1 leading-relaxed">{s.desc}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gaps */}
            <div className="bg-white border border-red-500/20 rounded-2xl p-7">
              <div className="flex items-center gap-2 text-red-600">
                <X size={18} strokeWidth={3} />
                <div className="text-xs font-bold uppercase tracking-widest">10 critical gaps</div>
              </div>
              <ul className="mt-6 space-y-5">
                {gaps.map((g, i) => (
                  <li key={i}>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X size={12} strokeWidth={3} />
                      </div>
                      <div>
                        <div className="font-semibold text-navy text-sm">{g.title}</div>
                        <div className="text-xs text-navy/60 mt-1 leading-relaxed">{g.desc}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IMPROVEMENTS */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Top 15 improvements</div>
            <h2 className="h-section mt-3">Ranked by impact-per-hour.</h2>
            <p className="mt-4 text-navy/70">
              <span className="inline-flex items-center gap-1 font-bold text-red-600">P0</span> = this week ·{' '}
              <span className="inline-flex items-center gap-1 font-bold text-amber-600">P1</span> = this month ·{' '}
              <span className="inline-flex items-center gap-1 font-bold text-navy">P2</span> = within 90 days
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
            {improvements.map((imp) => {
              const Icon = imp.icon
              return (
                <div key={imp.num} className="bg-white border-2 border-navy/10 rounded-2xl p-6 hover:border-navy/30 hover:shadow-xl hover:shadow-navy/5 transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-navy text-white flex items-center justify-center font-bold font-display text-sm flex-shrink-0">
                        {String(imp.num).padStart(2, '0')}
                      </div>
                      <div>
                        <div className="text-[10px] text-navy/50 font-bold uppercase tracking-widest">Improvement</div>
                        <h3 className="text-lg font-bold text-navy leading-tight mt-0.5">{imp.title}</h3>
                      </div>
                    </div>
                    <Icon size={20} className="text-navy/30 flex-shrink-0 mt-1" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <ImpactBadge value={imp.impact} />
                    <EffortBadge value={imp.effort} />
                    <PriorityBadge value={imp.priority} />
                  </div>

                  <div className="mt-5 space-y-3 text-sm">
                    <div>
                      <div className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">Problem</div>
                      <p className="text-navy/70 leading-relaxed">{imp.problem}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Solution</div>
                      <p className="text-navy/70 leading-relaxed">{imp.solution}</p>
                    </div>
                    <div className="pt-3 border-t border-navy/10">
                      <div className="text-[10px] font-bold text-navy uppercase tracking-widest mb-1 flex items-center gap-1">
                        <TrendingUp size={11} /> Expected lift
                      </div>
                      <p className="text-navy/80 leading-relaxed font-medium">{imp.lift}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 90-DAY ROADMAP */}
      <section className="section bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow !text-emerald-400">The plan</div>
            <h2 className="h-section mt-3">90-day execution roadmap.</h2>
            <p className="mt-4 text-white/70">
              Front-loaded weeks 1–3 (~10 hrs dev + 3 hrs content). Weeks 4–12 settle into ~5 hrs/week. Total effort: ~80–100 hours over 90 days.
            </p>
          </div>

          <div className="mt-14 max-w-4xl mx-auto space-y-4">
            {roadmap.map((phase, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500 text-navy flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">{phase.weeks}</div>
                      <div className="text-lg font-bold">{phase.focus}</div>
                    </div>
                  </div>
                  <div className="flex-1 grid sm:grid-cols-2 gap-2 md:border-l md:border-white/10 md:pl-6">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-white/80">
                        <Check size={14} className="text-emerald-400 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVENUE PROJECTIONS */}
      <section className="section bg-white border-b border-navy/10">
        <div className="container max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Revenue projections</div>
            <h2 className="h-section mt-3">The numbers.</h2>
            <p className="mt-4 text-navy/70">
              Assumes $300 average job value and 30% close rate on qualified leads. Conservative mid-range — top quartile performance is 25–40% higher.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-4 font-bold text-xs uppercase tracking-wider">Stage</th>
                  <th className="text-center px-5 py-4 font-bold text-xs uppercase tracking-wider">Leads/mo</th>
                  <th className="text-center px-5 py-4 font-bold text-xs uppercase tracking-wider">Close rate</th>
                  <th className="text-center px-5 py-4 font-bold text-xs uppercase tracking-wider">Jobs/mo</th>
                  <th className="text-center px-5 py-4 font-bold text-xs uppercase tracking-wider">Avg ticket</th>
                  <th className="text-right px-5 py-4 font-bold text-xs uppercase tracking-wider">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {projections.map((row, i) => (
                  <tr key={i} className={`border-b border-navy/10 ${row.highlight ? 'bg-emerald-50/50' : i % 2 ? 'bg-navy-50/30' : 'bg-white'}`}>
                    <td className="px-5 py-4 font-semibold text-navy text-sm">{row.stage}</td>
                    <td className="px-5 py-4 text-center text-navy/70 text-sm">{row.leads}</td>
                    <td className="px-5 py-4 text-center text-navy/70 text-sm">{row.close}</td>
                    <td className="px-5 py-4 text-center text-navy/70 text-sm">{row.jobs}</td>
                    <td className="px-5 py-4 text-center text-navy/70 text-sm">{row.ticket}</td>
                    <td className={`px-5 py-4 text-right font-bold text-lg ${row.highlight ? 'text-emerald-600' : 'text-navy'}`}>{row.rev}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <div className="flex items-start gap-3">
              <DollarSign size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-navy">Investment vs return</div>
                <p className="text-sm text-navy/70 mt-1 leading-relaxed">
                  Tools cost <b>$0–99/mo</b> (GA4, Cal.com, Web3Forms all free; optional NiceJob $99/mo). No paid ad spend required for baseline plan. At 6 months, expected revenue lift is <b>$15,000–18,000/mo</b> over baseline. Payback is immediate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC MOATS */}
      <section className="section bg-navy-50/40 border-b border-navy/10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Strategic moats</div>
            <h2 className="h-section mt-3">Why this compounds.</h2>
            <p className="mt-4 text-navy/70">
              Individual improvements are useful. Real goal: <b>compounding moats</b> competitors can't catch up on.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {moats.map((moat, i) => {
              const Icon = moat.icon
              return (
                <div key={i} className="bg-white border border-navy/10 rounded-2xl p-7 hover:shadow-xl hover:shadow-navy/5 transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{moat.title}</h3>
                  <p className="mt-3 text-sm text-navy/70 leading-relaxed">{moat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="container max-w-3xl relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Shield size={14} /> Ready to execute
          </div>
          <h2 className="h-section">Let's book the Zoom.</h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Every item here is ROI-positive and proven for local service. Recommended next step: a 30-min Zoom to walk the plan, prioritize the P0 list against your calendar, and connect the real domain. Once the site goes live with real contact info + GBP, everything else compounds from there.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={contact.phoneHref} className="btn-white">
              <Phone size={16} /> Call {contact.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
              Start the build <ArrowRight size={16} />
            </Link>
          </div>

          <p className="mt-12 text-xs text-white/40">
            Prepared by SkynetJoe Labs · skynetjoe.com
          </p>
        </div>
      </section>
    </>
  )
}
