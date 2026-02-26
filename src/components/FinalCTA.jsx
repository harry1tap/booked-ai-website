import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal.js'

export default function FinalCTA() {
  const [ref, isVisible] = useScrollReveal(0.2)

  return (
    <section className="bg-black py-20 md:py-28 border-t border-white/10">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 md:px-12 text-center reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
          See If Your Area's Still Available
        </h2>

        <p className="text-white/60 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          We work with one solar installer per region. If your area's already taken, we'll let you know. If it's open, we'll book a 30-minute call to walk you through exactly how the system works for your patch.
        </p>

        <Link
          to="/book"
          className="inline-block bg-orange px-8 py-3.5 rounded hover:scale-105 hover:brightness-110 transition-all duration-200"
        >
          <span className="block text-white font-bold text-base md:text-lg">Check My Area</span>
        </Link>

        <p className="text-white/30 text-sm font-medium mt-4">No contracts. Pay per appointment only.</p>
      </div>
    </section>
  )
}
