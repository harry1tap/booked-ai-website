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
          Ready to Become A Leader?
        </h2>

        <p className="text-black/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Schedule a casual chat with us today and we'll walk you through exactly how it works.
        </p>

        <Link
          to="/book"
          className="inline-block bg-black px-8 py-3.5 rounded hover:bg-black/80 transition-colors duration-200"
        >
          <span className="block text-orange font-bold text-base md:text-lg">Apply For Your Area</span>
          <span className="block text-xs text-white/30 font-medium">1 Installer Per Area</span>
        </Link>
      </div>
    </section>
  )
}
