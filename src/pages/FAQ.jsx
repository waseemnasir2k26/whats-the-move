import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus, Phone, ArrowRight } from 'lucide-react'
import { contact } from '../data/serviceAreas'

const faqs = [
  {
    q: 'What does "labor-only" actually mean?',
    a: 'It means we provide the manpower for your move — loading, unloading, lifting, carrying, disassembling, reassembling — but we don\'t provide the truck. You rent your own (U-Haul, Penske, Budget, Home Depot, etc.) and we handle everything else. By cutting out the truck, the gas, and the franchise overhead, you save 50–70% versus a traditional moving company.',
  },
  {
    q: 'How much does it cost?',
    a: 'A flat $50 per hour, per mover, with a 1-hour minimum. So a 2-mover team for 2 hours = $200. No deposit. No travel fee inside Charleston County. We always quote you the exact price before we start.',
  },
  {
    q: 'How many movers do I need?',
    a: 'Most studio and 1-bedroom moves need 2 movers. 2–3 bedroom homes typically need 3 movers. Big homes or moves with heavy items (pianos, gun safes, sectionals) often need 4. When you ask for a quote, we\'ll recommend the right size crew based on your inventory.',
  },
  {
    q: 'Do you require a deposit?',
    a: 'No. Zero. Not a penny. You only pay when the job is finished. We accept Venmo, Zelle, Cash App, cash, or card.',
  },
  {
    q: 'How far in advance do I need to book?',
    a: 'Same-day and next-day moves are usually possible. Book ahead if you can — especially on weekends or end-of-month — but we\'ll always try to fit you in.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes. Our movers are insured and background-checked. We treat your stuff like it\'s our own.',
  },
  {
    q: 'Do you move heavy items inside the home (no truck needed)?',
    a: 'Absolutely. Need a couch moved upstairs? A piano shifted across the room? A bedroom rearranged? We do in-home furniture moves all the time. Same flat $50/hr per mover.',
  },
  {
    q: 'What about stairs, elevators, or long walks?',
    a: 'No extra fees for stairs or elevators inside Charleston County. Just let us know in advance so we can plan for it. We\'ll bring the right team and the right equipment.',
  },
  {
    q: 'Do you bring tools, dollies, and blankets?',
    a: 'We bring basic moving tools, straps, and dollies. If you\'d like furniture pads or shrink wrap, those usually come with your truck rental — we\'ll let you know what to grab. Or we can supply them on request.',
  },
  {
    q: 'What hours are you available?',
    a: 'We work 7 days a week, 8 AM to 9 PM. Late-night moves are possible on request.',
  },
  {
    q: 'What areas do you cover?',
    a: 'All of Charleston County — Downtown Charleston, North Charleston, Mount Pleasant, James Island, John\'s Island, West Ashley, Daniel Island, Folly Beach, Sullivan\'s Island, Isle of Palms — plus Summerville, Hanahan, Goose Creek, and Moncks Corner.',
  },
  {
    q: 'Can I book just loading or just unloading?',
    a: 'Yes. Lots of customers do exactly that — rent a truck, have us load it, drive it themselves, then maybe hire a different crew on the other end. Or vice versa. Whatever saves you money.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <section className="bg-navy text-white">
        <div className="container section">
          <div className="max-w-3xl">
            <div className="eyebrow !text-white/60">Common questions</div>
            <h1 className="h-display mt-4">Everything you wanted to ask.</h1>
            <p className="mt-6 text-lg text-white/80">
              Don't see your question? Just call us — we'll answer in plain English, no sales pressure.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-navy/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-navy/[0.02] transition-colors"
                >
                  <span className="font-semibold text-navy pr-4">{faq.q}</span>
                  {open === i
                    ? <Minus size={20} className="text-navy flex-shrink-0" />
                    : <Plus size={20} className="text-navy flex-shrink-0" />}
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-navy/70 leading-relaxed text-sm fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-50/50 border-t border-navy/10">
        <div className="container text-center max-w-2xl">
          <h2 className="h-section">Still have questions?</h2>
          <p className="mt-4 text-navy/70">We're real humans. Call or text and we'll get back fast.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={contact.phoneHref} className="btn-primary">
              <Phone size={16} /> {contact.phone}
            </a>
            <Link to="/quote" className="btn-outline">
              Get a quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
