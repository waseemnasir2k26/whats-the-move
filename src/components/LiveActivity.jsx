import { useState, useEffect } from 'react'
import { Check, X } from 'lucide-react'

const activities = [
  { name: 'Sarah L.',  area: 'Mt Pleasant',   action: 'just booked a 2-mover move' },
  { name: 'Mike R.',   area: 'West Ashley',   action: 'got a quote' },
  { name: 'Jenna K.',  area: 'Downtown',      action: 'booked a 3-mover crew' },
  { name: 'David T.',  area: 'James Island',  action: 'requested a next-day move' },
  { name: 'Emily H.',  area: 'North Chas.',   action: 'just booked an apartment move' },
  { name: 'Carlos M.', area: 'Summerville',   action: 'requested a quote' },
  { name: 'Tiffany W.',area: "John's Island", action: 'booked an in-home furniture move' },
  { name: 'Ryan P.',   area: 'Folly Beach',   action: 'just got a quote' },
  { name: 'Maya O.',   area: 'Goose Creek',   action: 'booked a 2-mover crew' },
  { name: 'Brandon S.',area: 'Hanahan',       action: 'requested a 3 BR move' },
]

const minutesAgo = ['2 min ago', '4 min ago', '6 min ago', '8 min ago', '12 min ago', '15 min ago', '18 min ago', '22 min ago']

export default function LiveActivity() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    // Initial delay
    const initial = setTimeout(() => setVisible(true), 8000)
    return () => clearTimeout(initial)
  }, [dismissed])

  useEffect(() => {
    if (!visible || dismissed) return
    // Auto-rotate every 9 seconds
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % activities.length)
        setVisible(true)
      }, 400)
    }, 9000)
    return () => clearInterval(interval)
  }, [visible, dismissed])

  if (dismissed || !visible) return null

  const activity = activities[current]
  const time = minutesAgo[current % minutesAgo.length]

  return (
    <div className="fixed bottom-24 left-6 z-50 max-w-[280px] sm:max-w-[320px] hidden sm:block animate-slide-in-right">
      <div className="bg-white rounded-2xl shadow-2xl shadow-navy/20 border border-navy/10 p-4 flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
          <Check size={18} className="text-emerald-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-navy truncate">
            {activity.name} · {activity.area}
          </div>
          <div className="text-xs text-navy/70 mt-0.5">{activity.action}</div>
          <div className="text-[10px] text-navy/40 mt-1 uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            {time}
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-navy/30 hover:text-navy/60 transition-colors flex-shrink-0"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
