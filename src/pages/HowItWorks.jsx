import { Link } from 'react-router-dom'
import { ArrowRight, Check, X, Phone, Truck, Users, Clock, DollarSign } from 'lucide-react'
import { contact } from '../data/serviceAreas'
import Calculator from '../components/Calculator'
import TruckRecommender from '../components/TruckRecommender'

export default function HowItWorks() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white">
        <div className="container section">
          <div className="max-w-3xl">
            <div className="eyebrow !text-white/60">Pricing & process</div>
            <h1 className="h-display mt-4">
              How labor-only moving works
              <span className="text-white/60"> — and why it's cheaper.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Most moving companies charge you for the truck, the gas, the warehouse, the franchise fee, and the labor. We just charge for the labor. That's where the savings come from.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow">Simple, flat pricing</div>
              <h2 className="h-section mt-3">$50 per hour, per mover.</h2>
              <p className="mt-4 text-navy/70 text-lg">
                No quotes packed with surprise fees. No deposit. No travel charge inside Charleston County. Just the time we work, on the dot.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { label: 'Hourly rate', value: '$50/hr per mover' },
                  { label: 'Minimum', value: '1 hour minimum per mover' },
                  { label: 'Deposit', value: 'None — pay when the job is done' },
                  { label: 'Travel fee', value: 'None inside Charleston County' },
                  { label: 'Cancellation', value: 'Free up to 24 hours before' },
                ].map(({ label, value }) => (
                  <li key={label} className="flex justify-between border-b border-navy/10 pb-3">
                    <span className="text-navy/60">{label}</span>
                    <span className="font-semibold text-navy">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample quotes */}
            <div className="bg-navy-50/50 border border-navy/10 rounded-2xl p-8">
              <div className="eyebrow">Sample jobs</div>
              <h3 className="text-2xl font-bold mt-2">What people typically pay</h3>

              <div className="mt-6 space-y-4">
                {[
                  { title: 'Studio / 1-bedroom apartment', crew: '2 movers · 2 hours', total: '$200' },
                  { title: '2-bedroom apartment', crew: '2 movers · 3 hours', total: '$300' },
                  { title: '3-bedroom house', crew: '3 movers · 4 hours', total: '$600' },
                  { title: 'Single heavy item (couch, piano)', crew: '2 movers · 1 hour', total: '$100' },
                  { title: 'Loading only (you drive away)', crew: '2 movers · 2 hours', total: '$200' },
                ].map(({ title, crew, total }) => (
                  <div key={title} className="flex items-center justify-between bg-white border border-navy/10 rounded-lg p-4">
                    <div>
                      <div className="font-semibold text-sm">{title}</div>
                      <div className="text-xs text-navy/60 mt-0.5">{crew}</div>
                    </div>
                    <div className="text-2xl font-bold">{total}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-navy/60 mt-4">
                Estimates only. Your final cost depends on your actual move time. We always quote you exact pricing before we start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE CALCULATOR */}
      <section className="section bg-gradient-to-b from-white to-navy-50/30 border-t border-navy/10">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <div className="eyebrow">Try it live</div>
            <h2 className="h-section mt-3">Build your own estimate.</h2>
            <p className="mt-4 text-navy/70">
              Drag the sliders. The price updates in real time. No tricks, no "starting from."
            </p>
          </div>
          <Calculator variant="light" />
        </div>
      </section>

      {/* TRUCK RECOMMENDER */}
      <section className="section bg-navy-50/30 border-y border-navy/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <div className="eyebrow">Free tool</div>
            <h2 className="h-section mt-3">Don't know what truck to rent?</h2>
            <p className="mt-4 text-navy/70">
              Pick your home size — we'll tell you exactly which U-Haul.
            </p>
          </div>
          <TruckRecommender />
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section bg-navy-50/50 border-y border-navy/10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Why it's cheaper</div>
            <h2 className="h-section mt-3">Labor-only vs. full-service.</h2>
            <p className="mt-4 text-navy/70">
              For most local moves under 30 miles, going labor-only saves 50–70%. Here's why.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Full-service */}
            <div className="bg-white border border-navy/10 rounded-xl p-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-red-500">Full-service movers</div>
              <h3 className="text-2xl font-bold mt-2">$400 – $1,500+</h3>
              <p className="text-sm text-navy/60 mt-1">For a typical local move</p>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  'Truck + gas + insurance markup',
                  'Franchise / overhead fees',
                  'Mandatory deposits',
                  'Hidden surcharges (fuel, stairs, etc.)',
                  'Long booking lead times',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-navy/70">
                    <X size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Labor-only */}
            <div className="bg-navy text-white rounded-xl p-8 shadow-xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">What's The Move</div>
              <h3 className="text-2xl font-bold mt-2">$100 – $600</h3>
              <p className="text-sm text-white/60 mt-1">For the same move</p>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  'Just labor — you rent the truck (~$30–80)',
                  'No franchise, no markup',
                  'Zero deposit',
                  'Flat $50/hr — no surprises',
                  'Same-day & next-day available',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/90">
                    <Check size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">The process</div>
            <h2 className="h-section mt-3">From quote to done — usually within 24 hours.</h2>
          </div>

          <div className="mt-14 max-w-3xl mx-auto space-y-6">
            {[
              {
                num: '01',
                icon: Phone,
                title: 'Reach out',
                desc: 'Call, text, or fill out the quote form. Tell us pickup and drop-off addresses, the date, big items, stairs, and floor count.',
              },
              {
                num: '02',
                icon: Users,
                title: 'We size your crew',
                desc: 'Based on your inventory we recommend 2, 3, or 4 movers. Bigger crews mean shorter moves, so the total often costs about the same.',
              },
              {
                num: '03',
                icon: Truck,
                title: 'You handle the truck',
                desc: 'Reserve a U-Haul, Penske, Budget, or Home Depot rental. Need help picking the right size? Just ask — we do this every day.',
              },
              {
                num: '04',
                icon: Clock,
                title: 'We show up & work',
                desc: "Crew arrives in uniform, on time. We protect floors and doorways, wrap furniture, and load (or unload) the truck efficiently.",
              },
              {
                num: '05',
                icon: DollarSign,
                title: 'Pay only when done',
                desc: 'No deposit upfront. We bill you when the move is finished — Venmo, Zelle, cash, or card.',
              },
            ].map(({ num, icon: Icon, title, desc }) => (
              <div key={num} className="flex gap-6 items-start">
                <div className="text-3xl font-bold font-display text-navy/20 w-16 flex-shrink-0">{num}</div>
                <div className="flex-1 border-l border-navy/10 pl-6 pb-2">
                  <div className="flex items-center gap-3">
                    <Icon size={20} className="text-navy" />
                    <h3 className="text-xl font-bold">{title}</h3>
                  </div>
                  <p className="mt-2 text-navy/70 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy text-white text-center">
        <div className="container max-w-2xl">
          <h2 className="h-section">Get a free, no-pressure quote.</h2>
          <p className="mt-4 text-white/70">
            Takes 60 seconds. We'll text or call back within the hour.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/quote" className="btn-white">
              Get my quote <ArrowRight size={16} />
            </Link>
            <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
              <Phone size={16} /> {contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
