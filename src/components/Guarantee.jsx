import useScrollReveal from '../hooks/useScrollReveal.js'

export default function Guarantee() {
  const [ref, isVisible] = useScrollReveal(0.2)

  return (
    <section className="bg-orange py-16 md:py-24">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 md:px-12 text-center reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-tight mb-8">
          You Only Pay For Results
        </h2>

        <div className="space-y-5 text-black/80 text-base md:text-lg leading-relaxed">
          <p>
            You don't pay a retainer. You don't pay setup fees. You only pay when a pre-qualified homeowner is booked into your calendar. If we don't book appointments, you don't pay. It's that simple.
          </p>
          <p>
            No contracts. No minimum commitment. No "locked in for 6 months." We earn your business every single month by delivering real appointments.
          </p>
          <p>
            We only take on one installer per area because our system works best when we're fully focused on your territory. If we're not the right fit, you walk away. No strings.
          </p>
        </div>
      </div>
    </section>
  )
}
