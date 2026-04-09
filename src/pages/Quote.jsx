import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Phone, MapPin, Sofa, ArrowRight, Loader2 } from 'lucide-react'
import { contact, serviceAreas } from '../data/serviceAreas'

// Web3Forms — free, no signup required for first 1000 submissions
// Replace this access key with your own from https://web3forms.com
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY'

export default function Quote() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    // Capture the form ref BEFORE await — React pools synthetic events and
    // e.currentTarget becomes null after the first await.
    const form = e.currentTarget
    setStatus('submitting')
    setErrorMsg('')

    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_KEY)
    formData.append('subject', `New Quote Request — ${formData.get('name') || 'Unknown'}`)
    formData.append('from_name', "What's The Move Website")

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        form.reset()
        setStatus('success')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please call us instead.')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (status === 'success') {
    return (
      <section className="section bg-white">
        <div className="container max-w-2xl text-center">
          <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
            <Check size={32} className="text-emerald-600" />
          </div>
          <h1 className="h-section mt-6">Quote request received!</h1>
          <p className="mt-4 text-navy/70 text-lg">
            Thanks — we got your details. We'll text or call back within the hour during business hours (8 AM – 9 PM Eastern, 7 days a week).
          </p>
          <p className="mt-2 text-navy/60 text-sm">
            Need it sooner? Call us directly:
          </p>
          <a href={contact.phoneHref} className="mt-4 inline-block text-2xl font-bold text-navy hover:underline">
            {contact.phone}
          </a>
          <div className="mt-10">
            <Link to="/" className="btn-outline">Back to home</Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white">
        <div className="container section-tight">
          <div className="max-w-3xl">
            <div className="eyebrow !text-white/60">Free quote</div>
            <h1 className="h-display mt-4">
              Tell us about your move.
            </h1>
            <p className="mt-4 text-lg text-white/80">
              60 seconds. No deposit. No spam. We'll text or call back within the hour with a flat price.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* SIDEBAR */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="card bg-navy-50/50 border-navy/10">
                <div className="eyebrow">Prefer to call?</div>
                <a href={contact.phoneHref} className="mt-2 block text-2xl font-bold text-navy hover:underline">
                  {contact.phone}
                </a>
                <p className="mt-2 text-xs text-navy/60">7 days · 8a–9p</p>
              </div>

              <div className="card">
                <h3 className="font-bold text-navy">What happens next?</h3>
                <ol className="mt-4 space-y-3 text-sm text-navy/70">
                  <li className="flex gap-3"><span className="font-bold text-navy">1.</span> We review your details</li>
                  <li className="flex gap-3"><span className="font-bold text-navy">2.</span> We text or call back within 1 hour</li>
                  <li className="flex gap-3"><span className="font-bold text-navy">3.</span> We give you a flat-rate quote</li>
                  <li className="flex gap-3"><span className="font-bold text-navy">4.</span> If it works for you, we book it. No deposit.</li>
                </ol>
              </div>

              <div className="card">
                <h3 className="font-bold text-navy">Why us?</h3>
                <ul className="mt-4 space-y-2 text-sm text-navy/70">
                  {[
                    '$50/hr per mover',
                    'No deposits — ever',
                    'Insured & background-checked',
                    'Next-day available',
                    'All Charleston County',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check size={16} className="text-emerald-600 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* FORM */}
            <form onSubmit={onSubmit} className="lg:col-span-2 card md:p-10">
              {/* Honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              {/* CONTACT */}
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2"><Phone size={20} /> Your contact info</h2>
                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  <Field name="name" label="Full name *" required placeholder="Jane Smith" />
                  <Field name="phone" label="Phone *" required type="tel" placeholder="(843) 000-0000" />
                  <Field name="email" label="Email *" required type="email" placeholder="you@email.com" wrapperClass="sm:col-span-2" />
                </div>
              </div>

              {/* MOVE DETAILS */}
              <div className="mt-10 pt-10 border-t border-navy/10">
                <h2 className="text-xl font-bold flex items-center gap-2"><MapPin size={20} /> Move details</h2>
                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  <Field name="pickup_address" label="Pickup address *" required placeholder="123 King St, Charleston SC" wrapperClass="sm:col-span-2" />
                  <Field name="dropoff_address" label="Drop-off address *" required placeholder="456 Coleman Blvd, Mount Pleasant SC" wrapperClass="sm:col-span-2" />

                  <Field name="move_date" label="Preferred move date *" required type="date" />
                  <Select name="move_time" label="Preferred time" defaultValue="">
                    <option value="">Any time</option>
                    <option>Morning (8a–12p)</option>
                    <option>Afternoon (12p–5p)</option>
                    <option>Evening (5p–9p)</option>
                    <option>Late evening (after 9p)</option>
                  </Select>

                  <Select name="service_area" label="Service area *" required>
                    <option value="">Select an area</option>
                    {serviceAreas.map((a) => (
                      <option key={a.slug} value={a.name}>{a.name}</option>
                    ))}
                    <option value="Other / not sure">Other / not sure</option>
                  </Select>

                  <Select name="job_type" label="What do you need? *" required>
                    <option value="">Select...</option>
                    <option>Load truck only</option>
                    <option>Unload truck only</option>
                    <option>Load AND unload</option>
                    <option>In-home furniture move (no truck)</option>
                    <option>Single heavy item</option>
                  </Select>
                </div>
              </div>

              {/* HOME DETAILS */}
              <div className="mt-10 pt-10 border-t border-navy/10">
                <h2 className="text-xl font-bold flex items-center gap-2"><Sofa size={20} /> Property & inventory</h2>
                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  <Select name="home_size" label="Home size *" required>
                    <option value="">Select size</option>
                    <option>Studio</option>
                    <option>1 bedroom</option>
                    <option>2 bedrooms</option>
                    <option>3 bedrooms</option>
                    <option>4+ bedrooms</option>
                    <option>Just one item / partial</option>
                  </Select>

                  <Select name="floors" label="Number of floors *" required>
                    <option value="">Select</option>
                    <option>1 floor</option>
                    <option>2 floors</option>
                    <option>3 floors</option>
                    <option>4+ floors</option>
                  </Select>

                  <Select name="stairs_elevator" label="Stairs or elevator? *" required>
                    <option value="">Select</option>
                    <option>Ground floor only</option>
                    <option>Stairs (1 flight)</option>
                    <option>Stairs (2+ flights)</option>
                    <option>Elevator available</option>
                    <option>Both — pickup and drop differ</option>
                  </Select>

                  <Field name="estimated_boxes" label="Estimated # of boxes" type="number" placeholder="e.g. 25" />

                  <Textarea
                    name="large_furniture"
                    label="Large or heavy items"
                    placeholder="e.g. Sectional couch, king bed, washer/dryer, gun safe, treadmill, piano…"
                    wrapperClass="sm:col-span-2"
                  />

                  <Textarea
                    name="notes"
                    label="Anything else we should know?"
                    placeholder="Long walks, narrow doors, parking situation, deadline, etc."
                    wrapperClass="sm:col-span-2"
                  />
                </div>
              </div>

              {/* SUBMIT */}
              <div className="mt-10 pt-10 border-t border-navy/10">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send my quote request <ArrowRight size={18} />
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className="mt-4 text-sm text-red-600 text-center">{errorMsg} You can also call us at <a href={contact.phoneHref} className="underline font-semibold">{contact.phone}</a>.</p>
                )}

                <p className="mt-4 text-xs text-navy/50 text-center">
                  By submitting, you agree we may contact you about your move. We never share your info.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------- field helpers ---------- */
function Field({ name, label, type = 'text', required, placeholder, wrapperClass = '' }) {
  return (
    <div className={wrapperClass}>
      <label htmlFor={name} className="block text-sm font-medium text-navy mb-1.5">{label}</label>
      <input
        id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="w-full px-4 py-3 border border-navy/20 rounded-md focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy text-sm"
      />
    </div>
  )
}

function Select({ name, label, required, children, defaultValue, wrapperClass = '' }) {
  return (
    <div className={wrapperClass}>
      <label htmlFor={name} className="block text-sm font-medium text-navy mb-1.5">{label}</label>
      <select
        id={name} name={name} required={required} defaultValue={defaultValue}
        className="w-full px-4 py-3 border border-navy/20 rounded-md focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy text-sm bg-white"
      >
        {children}
      </select>
    </div>
  )
}

function Textarea({ name, label, placeholder, wrapperClass = '' }) {
  return (
    <div className={wrapperClass}>
      <label htmlFor={name} className="block text-sm font-medium text-navy mb-1.5">{label}</label>
      <textarea
        id={name} name={name} placeholder={placeholder} rows={3}
        className="w-full px-4 py-3 border border-navy/20 rounded-md focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy text-sm resize-y"
      />
    </div>
  )
}
