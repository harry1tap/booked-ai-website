import useScrollReveal from '../hooks/useScrollReveal.js'

const OTHER_AGENCIES = [
  'White-label tools anyone can buy',
  'Locked into 6-12 month contracts',
  'Generic campaigns, copy-pasted across clients',
  'Slow follow-ups, leads go cold',
  'Monthly reports full of vanity metrics',
]

const BOOKED_AI = [
  'Custom-built AI, coded from scratch',
  'Flexible terms, no lock-ins',
  'Campaigns tailored to your trade and area',
  'Instant AI follow-up, 24/7',
  'Weekly reports with real numbers that matter',
]

function Cross() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4 text-white/30 shrink-0">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function Tick() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-orange shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Differentiator() {
  const [ref, isVisible] = useScrollReveal(0.15)

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-10 md:mb-14">
            <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3">
              Why Booked AI
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Not Your Average Agency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Other Agencies */}
            <div className="border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-white/40 text-sm font-bold uppercase tracking-widest mb-6">
                Other Agencies
              </h3>
              <ul className="space-y-4">
                {OTHER_AGENCIES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5"><Cross /></span>
                    <span className="text-white/40 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booked AI */}
            <div className="border border-orange/30 rounded-2xl p-6 md:p-8 bg-orange/[0.03]">
              <h3 className="text-orange text-sm font-bold uppercase tracking-widest mb-6">
                Booked AI
              </h3>
              <ul className="space-y-4">
                {BOOKED_AI.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5"><Tick /></span>
                    <span className="text-white text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
