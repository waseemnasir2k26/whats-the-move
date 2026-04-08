import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Logo from './Logo'
import { serviceAreas, contact, hours } from '../data/serviceAreas'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Charleston's labor-only moving company. You rent the truck — we bring the muscle. Transparent pricing, no deposits, 7 days a week.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-white/70 hover:text-white">Home</Link></li>
              <li><Link to="/how-it-works" className="text-white/70 hover:text-white">How It Works</Link></li>
              <li><Link to="/service-areas" className="text-white/70 hover:text-white">Service Areas</Link></li>
              <li><Link to="/roadmap" className="text-white/70 hover:text-white">Roadmap</Link></li>
              <li><Link to="/faq" className="text-white/70 hover:text-white">FAQ</Link></li>
              <li><Link to="/quote" className="text-white/70 hover:text-white">Get a Quote</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href={contact.phoneHref} className="text-white/80 hover:text-white">{contact.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-white/80 hover:text-white break-all">{contact.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-white/80">{contact.serviceArea}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  <div>{hours.days}</div>
                  <div>{hours.hours}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Where We Work</h4>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
              {serviceAreas.slice(0, 10).map((area) => (
                <li key={area.slug} className="text-white/70">{area.name}</li>
              ))}
              <li><Link to="/service-areas" className="text-white font-medium underline underline-offset-2">View all areas →</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} What's The Move. All rights reserved.</p>
          <p>Labor-only moving service · Charleston County, SC</p>
        </div>
      </div>
    </footer>
  )
}
