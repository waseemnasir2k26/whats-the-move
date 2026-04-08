import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 → target when scrolled into view.
 * Usage: <CountUp end={2400} prefix="$" suffix="+" duration={2000} />
 */
export default function CountUp({ end, duration = 2000, prefix = '', suffix = '', decimals = 0 }) {
  const [value, setValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (hasAnimated) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = null
          const step = (ts) => {
            if (!start) start = ts
            const progress = Math.min((ts - start) / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(eased * end)
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  const display = decimals > 0
    ? value.toFixed(decimals)
    : Math.floor(value).toLocaleString()

  return (
    <span ref={ref}>{prefix}{display}{suffix}</span>
  )
}
