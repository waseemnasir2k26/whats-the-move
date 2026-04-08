export default function Logo({ variant = 'dark', className = '' }) {
  const textColor = variant === 'dark' ? '#00273d' : '#ffffff'
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="14" width="34" height="22" rx="2" stroke={textColor} strokeWidth="2.5" fill="none"/>
        <path d="M36 20 L44 20 L46 28 L46 36 L36 36 Z" stroke={textColor} strokeWidth="2.5" fill="none"/>
        <circle cx="12" cy="38" r="4" fill={textColor}/>
        <circle cx="38" cy="38" r="4" fill={textColor}/>
      </svg>
      <div className="leading-none">
        <div className="font-display font-bold text-[0.95rem] tracking-tight" style={{ color: textColor }}>
          WHAT'S THE
        </div>
        <div className="font-display font-bold text-[1.15rem] tracking-tight -mt-0.5" style={{ color: textColor }}>
          MOVE
        </div>
      </div>
    </div>
  )
}
