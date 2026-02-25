import useScrollReveal from '../hooks/useScrollReveal.js'

const PAIN_POINTS = [
  {
    emoji: '📞',
    title: 'Leads Come In When You\'re On A Roof',
    description: "You're mid-install, phone buzzing in your pocket. By the time you call back, they've already spoken to two other companies.",
  },
  {
    emoji: '🎲',
    title: 'Feast Or Famine Every Month',
    description: "One month you're turning work away. Next month you're wondering where the jobs went. Word of mouth doesn't scale, it fluctuates.",
  },
  {
    emoji: '🚗',
    title: 'Driving 45 Minutes To Quote A Tyre-Kicker',
    description: 'They sounded keen on the phone. Then you arrive and they\'re "just getting prices." That\'s half a day gone.',
  },
  {
    emoji: '🔥',
    title: 'Burned By Agencies Before',
    description: "You've paid for \"leads\" that were shared with five other installers, or worse, weren't even real homeowners. Once bitten, twice shy.",
  },
  {
    emoji: '⏰',
    title: "You Didn't Start This To Sit At A Desk",
    description: "You're an installer, not a marketing manager. But somehow you're spending evenings chasing leads instead of being with your family.",
  },
  {
    emoji: '⭐',
    title: 'Great Work, Not Enough Reviews',
    description: "Your installs are quality. Your customers are happy. But your Google profile doesn't reflect it, and new prospects check reviews before they call.",
  },
]

function PainCard({ point, index }) {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`border-l-2 border-orange pl-5 py-1 reveal stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
    >
      <div className="text-2xl mb-2">{point.emoji}</div>
      <h3 className="text-base md:text-lg font-bold text-white mb-2">
        {point.title}
      </h3>
      <p className="text-white/60 text-sm md:text-base leading-relaxed">
        {point.description}
      </p>
    </div>
  )
}

export default function Problem() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`text-center mb-12 md:mb-16 reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Sound Familiar?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PAIN_POINTS.map((point, i) => (
            <PainCard key={i} point={point} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
