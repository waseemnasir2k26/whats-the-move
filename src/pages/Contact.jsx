import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { contact, hours } from '../data/serviceAreas'

export default function Contact() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container section">
          <div className="max-w-3xl">
            <div className="eyebrow !text-white/60">Get in touch</div>
            <h1 className="h-display mt-4">
              We answer the phone. <span className="text-white/60">Like, actually.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Call, text, or email — usually you'll get a real person within minutes during business hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="card">
              <Phone size={28} className="text-navy" />
              <h3 className="mt-4 text-xl font-bold">Call or text</h3>
              <p className="mt-2 text-navy/70 text-sm">Fastest way to reach us. Same-day moves welcome.</p>
              <a href={contact.phoneHref} className="mt-4 inline-block text-2xl font-bold text-navy hover:underline">
                {contact.phone}
              </a>
            </div>

            <div className="card">
              <Mail size={28} className="text-navy" />
              <h3 className="mt-4 text-xl font-bold">Email</h3>
              <p className="mt-2 text-navy/70 text-sm">For non-urgent questions or quote details.</p>
              <a href={`mailto:${contact.email}`} className="mt-4 inline-block text-lg font-semibold text-navy hover:underline break-all">
                {contact.email}
              </a>
            </div>

            <div className="card">
              <Clock size={28} className="text-navy" />
              <h3 className="mt-4 text-xl font-bold">Hours</h3>
              <p className="mt-3 text-navy/80 font-medium">{hours.days}</p>
              <p className="text-navy/80 font-medium">{hours.hours}</p>
              <p className="mt-2 text-xs text-navy/60">{hours.note}</p>
            </div>

            <div className="card">
              <MapPin size={28} className="text-navy" />
              <h3 className="mt-4 text-xl font-bold">Service area</h3>
              <p className="mt-2 text-navy/70 text-sm">{contact.serviceArea}</p>
              <Link to="/service-areas" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:underline">
                View all areas <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/quote" className="btn-primary">
              Get my free quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
