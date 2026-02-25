import useScrollReveal from '../hooks/useScrollReveal.js'

const FLOW_STEPS = [
  { emoji: '🏠', label: 'Homeowner sees ad' },
  { emoji: '🤖', label: 'AI qualifies' },
  { emoji: '📅', label: 'Survey booked' },
  { emoji: '✓', label: 'You close', highlighted: true },
]

function Arrow() {
  return (
    <span className="text-white/30 text-sm font-bold shrink-0 hidden md:block">→</span>
  )
}

export default function FullFlow() {
  const [ref, isVisible] = useScrollReveal(0.2)

  return (
    <section className="bg-black py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`text-center reveal ${isVisible ? 'visible' : ''}`}
        >
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-8">
            The Full Flow
          </p>

          {/* Desktop: horizontal */}
          <div className="hidden md:flex items-center justify-center gap-4">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <div
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border ${
                    step.highlighted
                      ? 'border-orange bg-orange/10 text-orange'
                      : 'border-white/20 bg-white/5 text-white'
                  }`}
                >
                  <span className="text-base">{step.emoji}</span>
                  <span className="font-bold text-sm">{step.label}</span>
                </div>
                {i < FLOW_STEPS.length - 1 && <Arrow />}
              </div>
            ))}
          </div>

          {/* Mobile: compact horizontal row */}
          <div className="flex md:hidden items-center justify-center gap-1.5">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-center gap-1.5">
                <div
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full border ${
                    step.highlighted
                      ? 'border-orange bg-orange/10 text-orange'
                      : 'border-white/20 bg-white/5 text-white'
                  }`}
                >
                  <span className="text-xs">{step.emoji}</span>
                  <span className="font-bold text-[10px] whitespace-nowrap">{step.label}</span>
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <span className="text-white/30 text-[10px] font-bold shrink-0">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
