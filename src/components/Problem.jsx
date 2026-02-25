import useScrollReveal from '../hooks/useScrollReveal.js'

const PAIN_POINTS = [
  {
    emoji: '📞',
    title: "You're On A Roof When The Lead Comes In",
    description: "A homeowner enquires at 11am. You're 6 metres up in Swindon with a drill in your hand. By the time you call back at 4pm, they've already spoken to two other installers. You were the better company. You just weren't the fastest.",
  },
  {
    emoji: '🎲',
    title: 'Feast Or Famine Every Month',
    description: "Some months you're turning work away. Other months you're wondering where the next job's coming from. Word of mouth is great, but you can't control when referrals show up or how many.",
  },
  {
    emoji: '🚗',
    title: 'Driving 40 Minutes To A Tyre-Kicker',
    description: 'You arrive at a survey to find out they have a £2k budget for a full battery system, or are "just getting some quotes." Unqualified leads waste your fuel, your afternoon, and your patience.',
  },
  {
    emoji: '🔥',
    title: 'Got Burned By An Agency Before',
    description: "You paid someone, got a spreadsheet of names, and chased half of them with no response. The leads weren't qualified. The follow-up was on you. The agency blamed your sales process. Sound familiar?",
  },
  {
    emoji: '⏰',
    title: "You Didn't Start This To Sit At A Desk",
    description: "You started a solar company to install solar, not to spend evenings chasing leads, sending follow-up texts, and updating spreadsheets. But if you don't do it, the pipeline dries up.",
  },
  {
    emoji: '⭐',
    title: 'Great Work, Not Enough Reviews To Show It',
    description: "Your installs are quality. But your Google profile has 12 reviews. The competitor down the road has 80, and worse work. They're getting the business because they look more established online.",
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
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3">
            The Real Issue
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            You Don't Have A Lead Problem.<br />
            You Have A <span className="text-orange">Speed</span> Problem.
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Your installs are solid. Your customers are happy. But getting new work? That's where things break down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PAIN_POINTS.map((point, i) => (
            <PainCard key={i} point={point} index={i} />
          ))}
        </div>

        <p className="text-center text-xl md:text-2xl font-extrabold text-white mt-12 md:mt-16">
          That's what we fix.
        </p>
      </div>
    </section>
  )
}
