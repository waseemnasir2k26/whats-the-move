import { Star, Check, Zap } from 'lucide-react'

const items = [
  { icon: Star, text: '4.9/5 from local customers' },
  { icon: Zap, text: '$50/hr per mover' },
  { icon: Check, text: 'Zero deposit · ever' },
  { icon: Star, text: '7 days a week · 8a–9p' },
  { icon: Zap, text: 'Next-day moves available' },
  { icon: Check, text: 'Insured & background-checked' },
  { icon: Star, text: 'Save 50–70% vs full-service' },
  { icon: Zap, text: 'No travel fees in Charleston County' },
]

export default function Marquee({ variant = 'dark' }) {
  const isDark = variant === 'dark'
  // Duplicate the items for seamless loop
  const loop = [...items, ...items]

  return (
    <div className={`marquee-container py-5 border-y ${
      isDark ? 'bg-navy-900 border-white/10 text-white' : 'bg-navy-50/50 border-navy/10 text-navy'
    }`}>
      <div className="marquee-content">
        {loop.map((item, i) => {
          const Icon = item.icon
          return (
            <span key={i} className="inline-flex items-center gap-3 mx-8 text-sm font-bold uppercase tracking-wider">
              <Icon size={16} className={isDark ? 'text-emerald-400' : 'text-emerald-600'} />
              {item.text}
              <span className={isDark ? 'text-white/30' : 'text-navy/30'}>·</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
