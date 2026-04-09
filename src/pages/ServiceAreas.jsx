import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Phone } from 'lucide-react'
import { serviceAreas, contact } from '../data/serviceAreas'

export default function ServiceAreas() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white">
        <div className="container section">
          <div className="max-w-3xl">
            <div className="eyebrow !text-white/60">Where we work</div>
            <h1 className="h-display mt-4">
              Serving every corner of <span className="text-white/60">Charleston County.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              From beachfront condos on Isle of Palms to historic walk-ups downtown to new builds in Nexton — we've moved them all. Same flat $50/hr per mover, no matter where you are.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-white">
                Contact us about your area <ArrowRight size={16} />
              </Link>
              <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                <Phone size={16} /> {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS GRID */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <div key={area.slug} className="card hover:shadow-md hover:border-navy/30 transition-all">
                <div className="flex items-center gap-2 text-navy">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <h3 className="text-lg font-bold">{area.name}</h3>
                </div>
                <p className="mt-4 text-navy/70 text-sm leading-relaxed">{area.blurb}</p>
                {area.zips?.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-navy/10">
                    <div className="text-xs text-navy/50 uppercase tracking-wider font-semibold">ZIP Codes</div>
                    <div className="mt-1 text-xs text-navy/70 font-medium">{area.zips.join(' · ')}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT LISTED */}
      <section className="section bg-navy-50/50 border-y border-navy/10">
        <div className="container text-center max-w-2xl">
          <h2 className="h-section">Don't see your area?</h2>
          <p className="mt-4 text-navy/70 text-lg">
            We cover all of Charleston County and most of Berkeley County. If you're nearby and need labor, just call us — we'll figure it out.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={contact.phoneHref} className="btn-primary">
              <Phone size={16} /> Call {contact.phone}
            </a>
            <Link to="/contact" className="btn-outline">
              Send us a message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
