import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Users, Clock, ArrowRight, Sparkles, TrendingDown, Plus, Minus } from 'lucide-react'

const RATE = 50

const homePresets = [
  { label: 'Studio', movers: 2, hours: 2 },
  { label: '1 BR',   movers: 2, hours: 2 },
  { label: '2 BR',   movers: 2, hours: 3 },
  { label: '3 BR',   movers: 3, hours: 4 },
  { label: '4+ BR',  movers: 4, hours: 5 },
]

export default function Calculator({ variant = 'light' }) {
  const [movers, setMovers] = useState(2)
  const [hours, setHours] = useState(2)
  const [stairs, setStairs] = useState(false)
  const [packing, setPacking] = useState(false)
  const [activePreset, setActivePreset] = useState(0)

  const total = useMemo(() => movers * hours * RATE, [movers, hours])
  // Realistic full-service comparison: includes truck rental + labor + travel + fees
  // Industry avg: ~$120-180/hr for 2 movers w/ truck. We use 3.5x as conservative
  const fullService = useMemo(() => Math.max(400, Math.round(total * 3.5)), [total])
  const savings = fullService - total

  function applyPreset(i) {
    setActivePreset(i)
    setMovers(homePresets[i].movers)
    setHours(homePresets[i].hours)
  }

  const isDark = variant === 'dark'

  return (
    <div className={`relative overflow-hidden rounded-3xl ${isDark ? 'bg-navy text-white' : 'bg-white text-navy border-2 border-navy/10'} shadow-2xl ${isDark ? 'shadow-navy/40' : 'shadow-navy/10'}`}>
      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400/10 blob-bg" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-navy-500/10 blob-bg" style={{ animationDelay: '4s' }} />

      <div className="relative p-6 md:p-10">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-navy/5'}`}>
            <Sparkles size={20} />
          </div>
          <div>
            <div className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white/60' : 'text-navy/60'}`}>
              Live Calculator
            </div>
            <div className="text-lg font-bold">Estimate your move in 10 seconds</div>
          </div>
        </div>

        {/* Quick presets */}
        <div className="mt-6">
          <div className={`text-xs font-semibold mb-2 ${isDark ? 'text-white/60' : 'text-navy/60'}`}>
            START WITH YOUR HOME SIZE
          </div>
          <div className="flex flex-wrap gap-2">
            {homePresets.map((p, i) => (
              <button
                key={p.label}
                onClick={() => applyPreset(i)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activePreset === i
                    ? (isDark ? 'bg-white text-navy' : 'bg-navy text-white')
                    : (isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-navy/5 hover:bg-navy/10 text-navy')
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sliders */}
        <div className="mt-8 space-y-7">
          <Stepper
            icon={Users}
            label="Movers"
            value={movers}
            onChange={setMovers}
            min={2} max={6}
            isDark={isDark}
            sub={`${movers} ${movers === 1 ? 'mover' : 'movers'}`}
          />
          <Stepper
            icon={Clock}
            label="Hours"
            value={hours}
            onChange={setHours}
            min={1} max={8}
            isDark={isDark}
            sub={`${hours} ${hours === 1 ? 'hour' : 'hours'} (1hr min)`}
          />
        </div>

        {/* Add-ons */}
        <div className={`mt-7 pt-7 border-t ${isDark ? 'border-white/10' : 'border-navy/10'}`}>
          <div className={`text-xs font-semibold mb-3 ${isDark ? 'text-white/60' : 'text-navy/60'}`}>
            ADD-ONS
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Toggle
              label="Stairs / 2+ flights"
              checked={stairs}
              onChange={setStairs}
              isDark={isDark}
            />
            <Toggle
              label="Help packing"
              checked={packing}
              onChange={setPacking}
              isDark={isDark}
            />
          </div>
          <p className={`text-[11px] mt-3 ${isDark ? 'text-white/40' : 'text-navy/40'}`}>
            Add-ons are no extra charge — just helps us bring the right crew + tools.
          </p>
        </div>

        {/* Total */}
        <div className={`mt-8 p-6 rounded-2xl ${isDark ? 'bg-white text-navy' : 'bg-navy text-white'}`}>
          <div className="flex items-baseline justify-between">
            <div className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-navy/60' : 'text-white/60'}`}>
              Your estimated total
            </div>
            <div className="text-xs font-medium opacity-60">flat hourly</div>
          </div>
          <div className="mt-2 flex items-baseline gap-3">
            <div className="text-6xl md:text-7xl font-bold font-display tracking-tighter">
              ${total}
            </div>
            <div className="text-sm opacity-60">${RATE}/hr × {movers} × {hours}</div>
          </div>

          {/* Savings vs full-service */}
          <div className={`mt-5 p-4 rounded-xl ${isDark ? 'bg-emerald-50' : 'bg-emerald-500/10'} border border-emerald-500/20`}>
            <div className="flex items-center gap-2 text-emerald-600">
              <TrendingDown size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Vs full-service movers</span>
            </div>
            <div className="mt-1 flex items-baseline justify-between">
              <div>
                <span className={`text-sm ${isDark ? 'text-navy/50' : 'text-white/60'} line-through`}>
                  ${fullService}
                </span>
                <span className="ml-2 text-sm font-semibold text-emerald-600">
                  You save ${savings}
                </span>
              </div>
            </div>
          </div>

          <Link
            to="/quote"
            className={`mt-5 w-full inline-flex items-center justify-center gap-2 font-bold px-6 py-4 rounded-xl transition-all hover:-translate-y-0.5 ${
              isDark
                ? 'bg-navy text-white hover:bg-navy-700 shadow-lg shadow-navy/30'
                : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/30'
            }`}
          >
            Lock in this rate <ArrowRight size={18} />
          </Link>
          <p className={`mt-3 text-[11px] text-center ${isDark ? 'text-navy/50' : 'text-white/50'}`}>
            No deposit · Pay only when the job is done
          </p>
        </div>
      </div>
    </div>
  )
}

/* ----------------- helpers ----------------- */

function Stepper({ icon: Icon, label, value, onChange, min, max, isDark, sub }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Icon size={16} className="opacity-70" /> {label}
        </div>
        <div className={`text-xs ${isDark ? 'text-white/60' : 'text-navy/60'}`}>{sub}</div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-navy/5 hover:bg-navy/10'
          } disabled:opacity-30 disabled:cursor-not-allowed`}
        >
          <Minus size={16} />
        </button>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1"
        />
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-navy/5 hover:bg-navy/10'
          } disabled:opacity-30 disabled:cursor-not-allowed`}
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  )
}

function Toggle({ label, checked, onChange, isDark }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`flex items-center justify-between p-3 rounded-xl border transition-all text-left ${
        checked
          ? (isDark ? 'bg-white/15 border-white/30' : 'bg-navy/10 border-navy/30')
          : (isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-navy/10 hover:border-navy/30')
      }`}
    >
      <span className="text-sm font-semibold">{label}</span>
      <span className={`w-9 h-5 rounded-full relative transition-all flex-shrink-0 ${
        checked ? 'bg-emerald-500' : (isDark ? 'bg-white/20' : 'bg-navy/20')
      }`}>
        <span className={`absolute top-0.5 ${checked ? 'left-[18px]' : 'left-0.5'} w-4 h-4 bg-white rounded-full transition-all`} />
      </span>
    </button>
  )
}
