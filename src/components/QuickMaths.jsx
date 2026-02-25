import useScrollReveal from '../hooks/useScrollReveal.js'

export default function QuickMaths() {
  const [ref, isVisible] = useScrollReveal(0.15)

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
        >
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3 text-center">
            Quick Maths
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-10 md:mb-12 text-center">
            One Install Pays For The Whole System
          </h2>

          <div className="space-y-6 text-white/60 text-sm md:text-base leading-relaxed">
            <p>
              A typical residential solar installation with battery storage is worth somewhere between <span className="text-orange font-bold">£7,000 and £10,000</span> to your business.
            </p>
            <p>
              If our system books you <span className="text-orange font-bold">20 qualified surveys</span> in 90 days and you close even a quarter of them, that's <span className="text-orange font-bold">5 installs</span>, <span className="text-orange font-bold">£35,000 to £50,000</span> in revenue.
            </p>
            <p>
              Your total investment over those 3 months? Roughly <span className="text-orange font-bold">£5,000</span> including ad spend.
            </p>
            <p>
              That's a <span className="text-orange font-bold">7-10x return</span>. And that's the conservative estimate, most installers close higher than 25% on pre-qualified, booked surveys.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
