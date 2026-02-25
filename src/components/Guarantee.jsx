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
          Our Guarantee
        </h2>

        <div className="space-y-5 text-black/80 text-base md:text-lg leading-relaxed">
          <p>
            20-30 pre-qualified survey bookings in your calendar within 90 days. If we don't hit that number, we keep working for free until we do.
          </p>
          <p>
            No contracts. No setup fees. No "minimum 6-month commitment." We earn our keep by delivering results, not locking you in.
          </p>
          <p>
            We only take on one installer per area because our system works best when we're fully focused on your territory. If we can't deliver for you, we don't deserve your business.
          </p>
        </div>
      </div>
    </section>
  )
}
