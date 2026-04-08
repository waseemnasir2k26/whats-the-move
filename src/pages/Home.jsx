import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Check, Clock, DollarSign, ShieldCheck, Truck,
  Calendar, MapPin, Phone, Star, Wrench, Sofa
} from 'lucide-react'
import { serviceAreas, contact, pricing, hours } from '../data/serviceAreas'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
             style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="container relative section">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial="hidden" animate="visible" variants={fadeUp}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> Now booking — 7 days a week
              </span>
              <h1 className="h-display mt-6">
                Charleston's Labor-Only Movers.<br />
                <span className="text-white/70">$50/hr.</span> No deposit.
              </h1>
              <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
                You rent the truck. We bring the muscle. Save hundreds — sometimes thousands — versus full-service movers. Local, insured, and ready to load and unload anywhere in Charleston County.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/quote" className="btn-white text-base">
                  Get Your Free Quote <ArrowRight size={18} />
                </Link>
                <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                  <Phone size={18} /> {contact.phone}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                {[
                  { icon: DollarSign, label: '$50/hr', sub: 'per mover' },
                  { icon: ShieldCheck, label: '$0', sub: 'deposit' },
                  { icon: Clock, label: '7 days', sub: '8a–9p' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="border-l-2 border-white/30 pl-4">
                    <Icon size={18} className="text-white/70" />
                    <div className="mt-2 text-2xl font-bold">{label}</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">{sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="bg-white text-navy rounded-2xl p-6 md:p-8 shadow-2xl">
                <div className="eyebrow">How much will it cost?</div>
                <h3 className="text-2xl font-bold mt-2">A 2-mover, 2-hour move</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-navy/10 pb-2">
                    <span>2 movers × 2 hours × $50/hr</span>
                    <span className="font-semibold">$200</span>
                  </div>
                  <div className="flex justify-between border-b border-navy/10 pb-2">
                    <span>Deposit</span>
                    <span className="font-semibold text-emerald-600">$0</span>
                  </div>
                  <div className="flex justify-between border-b border-navy/10 pb-2">
                    <span>Travel / fuel surcharge</span>
                    <span className="font-semibold text-emerald-600">$0</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-base">Total</span>
                    <span className="font-bold text-2xl">$200</span>
                  </div>
                </div>
                <div className="mt-5 p-3 bg-navy/5 rounded-md text-xs text-navy/70">
                  Compare: A typical full-service local move runs <span className="font-semibold text-navy">$400–$1,500+</span>. You save the truck and the markup.
                </div>
                <Link to="/quote" className="btn-primary w-full mt-5">
                  Get my exact quote <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-navy-900 text-white/80 py-6 border-t border-white/10">
        <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium">
          <span className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> Insured & background-checked</span>
          <span className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> No deposit, no hidden fees</span>
          <span className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> Locally owned in Charleston</span>
          <span className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> Same-day moves available</span>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-2xl">
            <div className="eyebrow">What we do</div>
            <h2 className="h-section mt-3">The labor — without the markup.</h2>
            <p className="mt-4 text-navy/70 text-lg">
              We're the muscle for your move. Whether you've got a U-Haul out front or you just need help wrestling a couch up the stairs, we show up on time and get it done.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Truck,
                title: 'Load & Unload',
                desc: "You rent the truck or trailer (U-Haul, Penske, Budget — your call). We handle every box, bed, and dresser. Pack the truck like Tetris pros."
              },
              {
                icon: Sofa,
                title: 'In-Home Furniture Moves',
                desc: 'Rearranging? Got a sectional that won\'t fit through the door? We move heavy items inside your home — no truck needed.'
              },
              {
                icon: Wrench,
                title: 'Disassembly & Reassembly',
                desc: 'Beds, tables, IKEA closets — we take it apart on one end and put it back together on the other. Tools included.'
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center text-navy">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-navy/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section bg-navy-50/50 border-y border-navy/10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">How it works</div>
            <h2 className="h-section mt-3">Three steps. Done in a day.</h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tell us about your move',
                desc: 'Fill out the quick quote form or call us. We\'ll ask about pickup, drop-off, big items, stairs, and timing.',
              },
              {
                step: '02',
                title: 'We assign the right crew',
                desc: 'Based on your move size we send 2, 3, or 4 movers. You only pay for the time we work — to the minute after the 1-hour minimum.',
              },
              {
                step: '03',
                title: 'We show up and get it done',
                desc: 'We arrive on time, load (or unload) your truck efficiently, and double-check everything before we leave. Pay only when the job is done.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="text-6xl font-bold text-navy/15 font-display leading-none">{step}</div>
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-navy/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-outline">
              See full pricing breakdown <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <div className="eyebrow">Where we work</div>
              <h2 className="h-section mt-3">All of Charleston County.</h2>
              <p className="mt-4 text-navy/70">
                If it's in the Lowcountry, we'll be there. From Folly Beach to Moncks Corner — same flat $50/hr, same crew you can count on.
              </p>
            </div>
            <Link to="/service-areas" className="btn-outline self-start">
              View all areas <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {serviceAreas.slice(0, 12).map((area) => (
              <div key={area.slug} className="border border-navy/10 rounded-lg p-4 hover:border-navy hover:bg-navy/[0.02] transition-colors">
                <div className="flex items-center gap-2 text-navy">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span className="font-semibold text-sm">{area.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="section bg-navy text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow !text-white/60">Why people pick us</div>
            <h2 className="h-section mt-3">Cheap doesn't mean lazy.</h2>
            <p className="mt-4 text-white/70 text-lg">
              We're a small, local crew that takes pride in showing up on time, working hard, and treating your stuff like it's our own.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { quote: "Booked us in the morning, moved that afternoon. Two movers, super efficient. Saved me at least $400 vs the big movers.", name: "Sarah L.", area: "West Ashley" },
              { quote: "Honest pricing, no surprises. They moved a 3-bedroom apartment in under 3 hours. I'd hire them again in a heartbeat.", name: "Mike R.", area: "Mount Pleasant" },
              { quote: "I rented a U-Haul and they handled everything else. Way cheaper than full-service and the guys were great.", name: "Jenna K.", area: "Downtown Charleston" },
            ].map(({ quote, name, area }) => (
              <div key={name} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="mt-4 text-white/90 text-sm leading-relaxed">"{quote}"</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="font-semibold text-sm">{name}</div>
                  <div className="text-xs text-white/60">{area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container">
          <div className="bg-navy-50/50 border border-navy/10 rounded-2xl p-10 md:p-16 text-center">
            <Calendar size={36} className="mx-auto text-navy" />
            <h2 className="h-section mt-4">Ready to move this week?</h2>
            <p className="mt-3 text-navy/70 max-w-xl mx-auto">
              Tell us when, where, and what you've got. We'll text you a flat rate within the hour.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/quote" className="btn-primary">
                Get my free quote <ArrowRight size={16} />
              </Link>
              <a href={contact.phoneHref} className="btn-outline">
                <Phone size={16} /> Call {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
