import useScrollReveal from '../hooks/useScrollReveal.js'

export default function WhySolar() {
  const [ref, isVisible] = useScrollReveal(0.15)

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
        >
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3 text-center">
            Why Solar
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-10 md:mb-12 text-center">
            We Don't Work With Dentists, Gyms, Or Coffee Shops.
          </h2>

          <div className="space-y-6 text-white/60 text-sm md:text-base leading-relaxed">
            <p>
              Some agencies try to serve everyone. We chose one industry and went deep.
            </p>
            <p>
              We know that MCS certification matters. We know the difference between a 3.6kW and a 6kW system. We know the SEG tariff affects buying decisions. We know the 2027 Future Homes Standard is about to change this industry completely.
            </p>
            <p>
              We built our entire system around how solar companies actually work, the long survey-to-install cycle, the seasonal demand, the importance of trust and reviews in a high-ticket purchase.
            </p>
            <p>
              That means every ad, every qualification question, every follow-up message is written specifically for homeowners considering solar. Not generic "home improvement" copy pasted from another niche.
            </p>
          </div>

          <p className="text-white text-base md:text-lg font-bold mt-10 text-center">
            One niche. One system. Built for the way you actually sell.
          </p>
        </div>
      </div>
    </section>
  )
}
