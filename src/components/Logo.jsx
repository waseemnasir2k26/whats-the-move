export default function Logo({ variant = 'dark', className = '' }) {
  const src = variant === 'dark' ? '/logo.png' : '/logo-white.png'
  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={src}
        alt="What's The Move — Lowcountry Movers"
        className="h-12 w-auto"
      />
    </div>
  )
}
