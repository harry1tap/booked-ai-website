import useScrollReveal from '../hooks/useScrollReveal.js'

const STEPS = [
  {
    number: '01',
    title: 'Smart Ads, Real Enquiries',
    description:
      "We analyse your competition, position you as the standout in your market, run targeted Meta Ad campaigns that attract high-intent customers who actually want what you do.",
  },
  {
    number: '02',
    title: 'AI Qualifies & Books',
    description:
      "Our AI system works around the clock, turning interested leads into booked appointments. It handles all the scheduling while you focus on running your business.",
  },
  {
    number: '03',
    title: 'Become The Authority In Your Area',
    description:
      "While you deliver great work, our system collects Google reviews from every happy customer and builds your online presence automatically. More reviews, higher rankings, more trust. You become the obvious choice.",
  },
]

function StepCard({ step, index }) {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`relative text-center reveal stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
    >
      <span className="text-orange text-4xl md:text-5xl font-extrabold block mb-3">
        {step.number}
      </span>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
        {step.title}
      </h3>
      <p className="text-white/60 text-base leading-relaxed max-w-sm mx-auto">
        {step.description}
      </p>
    </div>
  )
}

export default function Solution() {
  const [headingRef, headingVisible] = useScrollReveal()

  return (
    <section id="how-it-works" className="bg-black pt-6 md:pt-10 pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div
          ref={headingRef}
          className={`mb-12 md:mb-16 text-center reveal ${headingVisible ? 'visible' : ''}`}
        >
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Your growth system in three steps.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-orange/30" />

          {STEPS.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
