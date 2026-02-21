import useScrollReveal from '../hooks/useScrollReveal.js'

const PAIN_POINTS = [
  "You've tried running ads yourself. Watched the YouTube tutorials until midnight. Still nothing.",
  "The phone rings while you're on a job. By the time you call back, they've gone with someone else.",
  "Monday mornings are spent chasing people who've already moved on.",
  "You're quoting jobs for people who are getting five other quotes and have no real intent.",
  "You're worrying about covering wages, not growing the business.",
  "You know you need help, but every agency sounds the same and none of them get what you actually do.",
]

function PainCard({ text, index }) {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`border-l-2 border-orange pl-5 py-3 reveal stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
    >
      <p className="text-black/80 text-base leading-relaxed">{text}</p>
    </div>
  )
}

export default function Problem() {
  const [headingRef, headingVisible] = useScrollReveal()

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div
          ref={headingRef}
          className={`mb-12 md:mb-16 reveal ${headingVisible ? 'visible' : ''}`}
        >
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3">
            Sound familiar?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-tight">
            You didn't start your business to chase leads all day.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PAIN_POINTS.map((point, i) => (
            <PainCard key={i} text={point} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
