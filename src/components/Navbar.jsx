import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { contact } from '../data/serviceAreas'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-navy/10">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" onClick={() => setOpen(false)} aria-label="What's The Move home">
          <Logo variant="dark" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-navy' : 'text-navy/60 hover:text-navy'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={contact.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-navy-700">
            <Phone size={16} />
            {contact.phone}
          </a>
          <Link to="/quote" className="btn-primary !py-2.5 !px-5 text-sm">
            Get Free Quote
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-navy/10 bg-white">
          <div className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 px-2 text-base font-medium rounded-md ${isActive ? 'text-navy bg-navy/5' : 'text-navy/70'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href={contact.phoneHref} className="py-3 px-2 flex items-center gap-2 text-base font-semibold text-navy">
              <Phone size={18} />
              {contact.phone}
            </a>
            <Link to="/quote" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
