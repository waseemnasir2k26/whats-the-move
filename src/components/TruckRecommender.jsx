import { useState } from 'react'
import { Truck, ExternalLink, Info } from 'lucide-react'

const trucks = [
  {
    homeSize: 'Studio / dorm',
    truck: '10\' Truck',
    capacity: 'Up to 1 room · ~390 cu ft',
    rental: '$20–40',
    icon: '🚐',
    fit: 'Twin/full bed, dresser, ~10 boxes, small couch',
  },
  {
    homeSize: '1 BR apartment',
    truck: '15\' Truck',
    capacity: '1–2 rooms · ~764 cu ft',
    rental: '$30–60',
    icon: '🚛',
    fit: 'Queen bed, dresser, sofa, table, ~25 boxes',
  },
  {
    homeSize: '2 BR apartment',
    truck: '17\' Truck',
    capacity: '2 rooms · ~865 cu ft',
    rental: '$40–80',
    icon: '🚛',
    fit: 'Queen + twin beds, sofa, dining set, ~40 boxes',
  },
  {
    homeSize: '2–3 BR house',
    truck: '20\' Truck',
    capacity: '2–3 rooms · ~1,016 cu ft',
    rental: '$50–100',
    icon: '🚚',
    fit: 'King bed, queen bed, sofa, full living room, ~60 boxes',
  },
  {
    homeSize: '4+ BR house',
    truck: '26\' Truck',
    capacity: '4+ rooms · ~1,682 cu ft',
    rental: '$60–130',
    icon: '🚚',
    fit: 'Multiple bedrooms, full home contents, appliances',
  },
]

export default function TruckRecommender() {
  const [selected, setSelected] = useState(1)
  const truck = trucks[selected]

  return (
    <div className="bg-white border-2 border-navy/10 rounded-3xl p-6 md:p-10 shadow-xl shadow-navy/5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center">
          <Truck size={20} className="text-navy" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-navy/60">
            Free tool · Charleston exclusive
          </div>
          <div className="text-lg font-bold text-navy">Which truck do I rent?</div>
        </div>
      </div>

      <p className="mt-4 text-sm text-navy/70 leading-relaxed">
        Pick your home size — we'll tell you exactly which U-Haul (or Penske) to rent so you don't waste money on the wrong size.
      </p>

      {/* Home size pills */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2">
        {trucks.map((t, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`px-3 py-3 rounded-xl text-xs font-bold transition-all ${
              selected === i
                ? 'bg-navy text-white shadow-lg shadow-navy/30 scale-105'
                : 'bg-navy/5 text-navy hover:bg-navy/10'
            }`}
          >
            {t.homeSize}
          </button>
        ))}
      </div>

      {/* Result */}
      <div key={selected} className="mt-6 p-6 md:p-8 bg-gradient-to-br from-navy to-navy-700 text-white rounded-2xl relative overflow-hidden fade-in">
        <div className="absolute top-0 right-0 text-[8rem] leading-none opacity-10">
          {truck.icon}
        </div>

        <div className="relative">
          <div className="text-xs font-bold uppercase tracking-widest text-white/60">We recommend</div>
          <div className="mt-2 flex items-end gap-3">
            <div className="text-5xl md:text-6xl font-bold font-display tracking-tighter">{truck.truck}</div>
          </div>
          <div className="mt-2 text-sm text-white/70">{truck.capacity}</div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-xs text-white/60 uppercase tracking-wider font-semibold">Truck rental cost</div>
              <div className="mt-1 text-2xl font-bold">{truck.rental}</div>
              <div className="text-[11px] text-white/50 mt-0.5">U-Haul, ~50 miles</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-xs text-white/60 uppercase tracking-wider font-semibold">Fits comfortably</div>
              <div className="mt-1 text-xs text-white/90 leading-relaxed">{truck.fit}</div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://www.uhaul.com/Reservations/Trucks/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-navy text-sm font-bold px-5 py-3 rounded-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5"
            >
              Reserve U-Haul <ExternalLink size={14} />
            </a>
            <a
              href="https://www.pensketruckrental.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-white/20 transition-all"
            >
              Reserve Penske <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Pro tip */}
      <div className="mt-5 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
        <Info size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-900 leading-relaxed">
          <span className="font-bold">Pro tip:</span> When in doubt, size <span className="font-bold">up</span>. A bigger truck only costs $10–20 more, but a too-small truck means a second trip — wasting hours and gas.
        </p>
      </div>
    </div>
  )
}
