import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal.js'

export default function FinalCTA() {
  const [ref, isVisible] = useScrollReveal(0.2)

  return (
    <section className="bg-orange py-20 md:py-28">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 md:px-12 text-center reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-tight mb-5">
          20-30 Qualified Survey Bookings In 90 Days.
        </h2>

        <p className="text-black/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Or we work for free. One solar installer per area. Check if yours is still open.
        </p>

        <Link
          to="/book"
          className="inline-block bg-black px-8 py-3.5 rounded hover:bg-black/80 transition-colors duration-200"
        >
          <span className="block text-orange font-bold text-base md:text-lg">Check Your Area's Available</span>
          <span className="block text-xs text-white/30 font-medium">Free 15-min call, no contracts, no pressure</span>
        </Link>
      </div>
    </section>
  )
}
