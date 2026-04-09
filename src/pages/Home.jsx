import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Check, Truck, MapPin, Phone, Star, Wrench, Sofa,
  Sparkles, TrendingDown
} from 'lucide-react'
import { serviceAreas, contact } from '../data/serviceAreas'
import Calculator from '../components/Calculator'
import Marquee from '../components/Marquee'
import CountUp from '../components/CountUp'
import TruckRecommender from '../components/TruckRecommender'

export default function Home() {
  return (
    <>
      {/* ========================= HERO ========================= */}
      <section className="relative bg-navy text-white overflow-hidden">
        {/* Animated blobs */}
        <div className="blob-bg w-[600px] h-[600px] bg-emerald-400/10 -top-40 -right-40" />
        <div className="blob-bg w-[500px] h-[500px] bg-navy-400/20 top-1/2 -left-40" style={{ animationDelay: '6s' }} />
        <div className="absolute inset-0 dot-bg-light opacity-30" />

        <div className="container relative pt-20 pb-12 md:pt-28 md:pb-16">
          {/* Live availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur border border-white/20 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase"
          >
            <span className="live-dot" />
            <span>2 crews available · today</span>
            <span className="text-white/40">·</span>
            <span className="text-emerald-400">Booking now</span>
          </motion.div>

          {/* MEGA HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mt-8 h-mega max-w-6xl"
          >
            Move for <span className="text-emerald-400">half</span><br />
            the price.<br />
            <span className="text-white/30 text-stroke">Charleston.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 grid lg:grid-cols-12 gap-12 items-end"
          >
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl font-medium">
                You rent the truck. We bring the muscle.<br />
                <span className="text-white/60">$50/hr per mover. Zero deposit. Seven days a week.</span>
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link to="/quote" className="btn-glow !text-base !py-4 !px-7 bg-emerald-500 hover:bg-emerald-600">
                  Get my quote in 60 sec <ArrowRight size={20} />
                </Link>
                <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-4 rounded-md hover:bg-white/10 transition-all hover:-translate-y-0.5">
                  <Phone size={18} /> {contact.phone}
                </a>
              </div>
            </div>

            {/* Hero stats — minimal, bold */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '$50', sub: 'per hour' },
                  { value: '$0', sub: 'deposit' },
                  { value: '7d', sub: 'a week' },
                ].map(({ value, sub }) => (
                  <div key={sub} className="border-l-2 border-white/20 pl-4">
                    <div className="text-4xl md:text-5xl font-bold font-display">{value}</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-1">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Marquee at bottom of hero */}
        <Marquee variant="dark" />
      </section>

      {/* ========================= LIVE CALCULATOR ========================= */}
      <section className="section bg-white relative overflow-hidden" id="calculator">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="eyebrow">Try it yourself</div>
              <h2 className="h-mega mt-3 text-navy">
                See your<br />
                <span className="text-emerald-500">exact</span><br />
                price.
              </h2>
              <p className="mt-6 text-lg text-navy/70 leading-relaxed">
                No fake "starting from" prices. No hidden fees. Drag the sliders and see what you'd actually pay — right now.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  'Real prices, no marketing tricks',
                  'See your savings vs full-service',
                  'Lock it in with no deposit',
                ].map((line) => (
                  <div key={line} className="flex items-center gap-3 text-navy/80">
                    <Check size={18} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{line}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <Calculator variant="light" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================= ANIMATED STATS ========================= */}
      <section className="section bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-bg-light opacity-20" />
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow !text-emerald-400">By the numbers</div>
            <h2 className="h-section mt-3">Charleston's most trusted labor-only crew.</h2>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { end: 2400, prefix: '', suffix: '+', label: 'Moves completed' },
              { end: 480, prefix: '$', suffix: 'k+', label: 'Saved by customers' },
              { end: 4.9, prefix: '', suffix: '/5', label: 'Average rating', decimals: 1 },
              { end: 98,  prefix: '', suffix: '%',  label: 'On-time arrival' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-5xl md:text-7xl font-bold font-display tracking-tighter text-white">
                  <CountUp end={stat.end} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals || 0} />
                </div>
                <div className="mt-3 text-xs text-white/60 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= BENTO GRID ========================= */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">What we actually do</div>
            <h2 className="h-mega mt-3 text-navy">
              The labor.<br />
              Without the<br />
              <span className="text-emerald-500">markup.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(180px,auto)]">
            {/* Big card - Load/Unload */}
            <div className="md:col-span-7 md:row-span-2 bg-navy text-white rounded-3xl p-8 md:p-10 relative overflow-hidden lift-card">
              <div className="absolute top-0 right-0 text-[14rem] leading-none opacity-5 select-none">📦</div>
              <Truck size={32} className="text-emerald-400" />
              <h3 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">Load & Unload</h3>
              <p className="mt-4 text-white/70 text-base leading-relaxed max-w-md">
                You rent the truck (U-Haul, Penske, Budget — your call). We pack it like Tetris pros, drive it to the spot, and unload everything where it belongs. Stairs? Elevators? Tight doors? We do this every day.
              </p>
              <Link to="/how-it-works" className="mt-6 inline-flex items-center gap-2 text-emerald-400 font-bold text-sm">
                See how it works <ArrowRight size={16} />
              </Link>
            </div>

            {/* Furniture */}
            <div className="md:col-span-5 bg-emerald-500 text-white rounded-3xl p-8 lift-card relative overflow-hidden">
              <Sofa size={28} />
              <h3 className="mt-4 text-2xl font-bold">In-home moves</h3>
              <p className="mt-2 text-white/90 text-sm leading-relaxed">
                Couch upstairs? Sectional rearrange? We move heavy stuff inside your home — no truck needed.
              </p>
            </div>

            {/* Packing Help */}
            <div className="md:col-span-5 bg-navy-50 border border-navy/10 text-navy rounded-3xl p-8 lift-card">
              <Wrench size={28} className="text-navy" />
              <h3 className="mt-4 text-2xl font-bold">Packing & wrapping</h3>
              <p className="mt-2 text-navy/70 text-sm leading-relaxed">
                Moving blankets, shrink wrap, and basic tools included. We protect your furniture so it arrives in one piece.
              </p>
            </div>

            {/* Stat card 1 */}
            <div className="md:col-span-3 bg-white border-2 border-navy/10 rounded-3xl p-6 flex flex-col justify-center lift-card">
              <div className="text-5xl font-bold text-navy font-display"><CountUp end={50} prefix="$" /></div>
              <div className="text-xs text-navy/60 uppercase tracking-widest font-bold mt-2">per hour, per mover</div>
            </div>

            {/* Stat card 2 */}
            <div className="md:col-span-4 bg-navy-900 text-white rounded-3xl p-6 flex flex-col justify-center lift-card">
              <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-widest font-bold">
                <TrendingDown size={14} /> Average savings
              </div>
              <div className="text-4xl md:text-5xl font-bold mt-2 font-display">
                <CountUp end={650} prefix="$" suffix="+" />
              </div>
              <div className="text-xs text-white/60 mt-1">vs full-service in Charleston</div>
            </div>

            {/* CTA card */}
            <div className="md:col-span-5 bg-gradient-to-br from-navy via-navy-700 to-navy-900 text-white rounded-3xl p-6 flex flex-col justify-between lift-card overflow-hidden relative">
              <Sparkles size={24} className="text-emerald-400" />
              <div>
                <div className="text-lg font-bold leading-tight">Need a crew tonight?</div>
                <div className="text-xs text-white/60 mt-1">Late moves available 7d/wk</div>
                <a href={contact.phoneHref} className="mt-3 inline-flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-emerald-600 transition-colors">
                  <Phone size={12} /> Call now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= TRUCK RECOMMENDER ========================= */}
      <section className="section bg-navy-50/30 border-y border-navy/10 relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow">Free interactive tool</div>
            <h2 className="h-mega mt-3 text-navy">
              Which truck<br />
              do you need?
            </h2>
            <p className="mt-6 text-lg text-navy/70">
              Picking the wrong size U-Haul costs you hours and gas. We'll tell you exactly what to rent.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TruckRecommender />
          </div>
        </div>
      </section>

      {/* ========================= HOW IT WORKS ========================= */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">How it works</div>
            <h2 className="h-section mt-3">Three steps. Done in a day.</h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Tell us about your move', desc: 'Quote form or call. We\'ll ask about pickup, drop-off, big items, stairs, and timing.' },
              { step: '02', title: 'We assign the right crew', desc: 'Based on your move size we send 2, 3, or 4 movers. You only pay for the time we work.' },
              { step: '03', title: 'We show up and get it done', desc: 'On time, in uniform. We protect floors, wrap furniture, load efficiently, and double-check everything.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative group">
                <div className="text-7xl md:text-8xl font-bold text-navy/[0.08] group-hover:text-emerald-500/30 font-display leading-none transition-colors">{step}</div>
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-navy/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-outline">
              Full pricing breakdown <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================= SERVICE AREAS ========================= */}
      <section className="section bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-bg-light opacity-20" />
        <div className="container relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <div className="eyebrow !text-emerald-400">Where we work</div>
              <h2 className="h-mega mt-3">
                All of<br />
                Charleston<br />
                County.
              </h2>
            </div>
            <p className="text-white/70 text-lg max-w-md">
              From Folly Beach to Moncks Corner — same flat $50/hr. Same hardworking crew.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {serviceAreas.map((area) => (
              <div key={area.slug} className="border border-white/10 rounded-xl p-4 hover:border-emerald-400 hover:bg-white/5 transition-all hover:-translate-y-0.5 cursor-default">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-emerald-400 flex-shrink-0" />
                  <span className="font-semibold text-sm">{area.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/service-areas" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm hover:text-emerald-300">
              See area details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================= TESTIMONIALS ========================= */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Real customers</div>
            <h2 className="h-section mt-3">Cheap doesn't mean lazy.</h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { quote: "Booked us in the morning, moved that afternoon. Two movers, super efficient. Saved me at least $400 vs the big movers.", name: "Sarah L.", area: "West Ashley" },
              { quote: "Honest pricing, no surprises. They moved a 3-bedroom apartment in under 3 hours. I'd hire them again in a heartbeat.", name: "Mike R.", area: "Mount Pleasant" },
              { quote: "I rented a U-Haul and they handled everything else. Way cheaper than full-service and the guys were great.", name: "Jenna K.", area: "Downtown Charleston" },
            ].map(({ quote, name, area }) => (
              <div key={name} className="card lift-card">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="mt-4 text-navy/80 text-sm leading-relaxed">"{quote}"</p>
                <div className="mt-4 pt-4 border-t border-navy/10">
                  <div className="font-bold text-sm text-navy">{name}</div>
                  <div className="text-xs text-navy/60">{area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= FINAL CTA ========================= */}
      <section className="section bg-gradient-to-br from-navy via-navy-700 to-navy text-white relative overflow-hidden">
        <div className="blob-bg w-[500px] h-[500px] bg-emerald-400/20 -top-40 -left-40" />
        <div className="blob-bg w-[500px] h-[500px] bg-emerald-400/10 -bottom-40 -right-40" style={{ animationDelay: '4s' }} />

        <div className="container relative text-center">
          <Sparkles size={40} className="mx-auto text-emerald-400" />
          <h2 className="h-mega mt-6">
            Ready to move<br />
            this week?
          </h2>
          <p className="mt-6 text-xl text-white/70 max-w-xl mx-auto">
            60 seconds. Zero deposit. Real humans answer the phone.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/quote" className="btn-glow bg-emerald-500 hover:bg-emerald-600 !text-base !py-4 !px-7">
              Get my free quote <ArrowRight size={20} />
            </Link>
            <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-4 rounded-md hover:bg-white/10 transition-all">
              <Phone size={18} /> {contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
