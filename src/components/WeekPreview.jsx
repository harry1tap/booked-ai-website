import useScrollReveal from '../hooks/useScrollReveal.js'

export default function WeekPreview() {
  const [ref, isVisible] = useScrollReveal(0.15)

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
        >
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3 text-center">
            What Actually Changes
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-10 md:mb-12 text-center">
            What Your Week <span className="text-orange">Looks Like</span> With This Running
          </h2>

          <div className="space-y-6 text-white/60 text-sm md:text-base leading-relaxed">
            <p>
              Monday morning. You check your phone over coffee. Three survey bookings sitting in your calendar for this week, all pre-qualified, all homeowners, all expecting you.
            </p>
            <p>
              You're not ringing back cold leads from Friday. You're not chasing people who ghosted. You're not wondering where next month's work is coming from.
            </p>
            <p>
              You drive to the first survey knowing they've already confirmed their property type, budget range, and timeline. You quote. A decent chunk of them say yes, because they were serious before you even walked through the door.
            </p>
            <p>
              Meanwhile, the customer you installed for last week just left you a 5-star Google review. You didn't ask them. The system did.
            </p>
          </div>

          <p className="text-xl md:text-2xl font-extrabold text-white mt-10 text-center">
            That's the difference.
          </p>
        </div>
      </div>
    </section>
  )
}
