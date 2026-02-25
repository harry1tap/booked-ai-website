import useScrollReveal from '../hooks/useScrollReveal.js'

const CRITERIA = [
  'Do quality work but rely too heavily on word of mouth',
  'Are tired of chasing leads manually between installs',
  'Want a consistent pipeline without hiring a sales team',
  'Have been burned by agencies selling shared or unqualified leads',
  'Are ready to own their area, not compete with five other companies for the same postcode',
]

export default function WhoIsFor() {
  const [ref, isVisible] = useScrollReveal(0.2)

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-10 text-center">
            Built For Solar Installers Who:
          </h2>

          <ul className="space-y-4">
            {CRITERIA.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/70 text-base md:text-lg leading-relaxed">
                <svg viewBox="0 0 24 24" fill="none" stroke="#E65224" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-1">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
