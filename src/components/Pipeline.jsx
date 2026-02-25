import useScrollReveal from '../hooks/useScrollReveal.js'

const STEPS = [
  {
    label: 'Ads',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M2 10l3-3v10l-3-3z" />
        <path d="M5 7h8a4 4 0 010 8H5" />
        <line x1="18" y1="8" x2="21" y2="5" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="18" y1="16" x2="21" y2="19" />
      </svg>
    ),
  },
  {
    label: 'AI Qualifies',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    label: 'Books',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    label: 'You Close',
    highlighted: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
]

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/30 shrink-0 hidden md:block">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  )
}

export default function Pipeline() {
  const [ref, isVisible] = useScrollReveal(0.2)

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`text-center reveal ${isVisible ? 'visible' : ''}`}
        >
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-10 md:mb-12">
            From Ad Click To <span className="text-orange">Booked Survey.</span>
            <br />
            Without You Touching A Thing.
          </h2>

          <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 md:p-10">
            {/* Desktop: horizontal row */}
            <div className="hidden md:flex items-center justify-center gap-4">
              {STEPS.map((step, i) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div
                    className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border transition-all ${
                      step.highlighted
                        ? 'border-orange bg-orange/10 text-orange'
                        : 'border-white/20 bg-white/5 text-white'
                    }`}
                  >
                    {step.icon}
                    <span className="font-bold text-sm">{step.label}</span>
                  </div>
                  {i < STEPS.length - 1 && <Arrow />}
                </div>
              ))}
            </div>

            {/* Mobile: horizontal scroll */}
            <div className="flex md:hidden overflow-x-auto scrollbar-hide -mx-6 px-6">
              <div className="flex items-center gap-2 mx-auto">
                {STEPS.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-2 shrink-0">
                    <div
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-sm ${
                        step.highlighted
                          ? 'border-orange bg-orange/10 text-orange'
                          : 'border-white/20 bg-white/5 text-white'
                      }`}
                    >
                      {step.icon}
                      <span className="font-bold text-xs whitespace-nowrap">{step.label}</span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white/30 shrink-0">
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-white/50 text-sm md:text-base mt-6 md:mt-8 max-w-lg mx-auto leading-relaxed">
              Each step feeds the next, creating a predictable flow from ad click to booked survey. No chasing. No guesswork. Just a system that delivers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
