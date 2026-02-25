import useScrollReveal from '../hooks/useScrollReveal.js'

const DONT_DO = [
  'No chasing leads or making follow-up calls',
  'No answering enquiry forms or returning messages',
  'No learning new software',
  'No writing ads or building websites',
  'No hiring a sales person',
  'No awkwardly asking customers for reviews',
]

export default function YourJob() {
  const [ref, isVisible] = useScrollReveal(0.15)

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`text-center reveal ${isVisible ? 'visible' : ''}`}
        >
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3">
            Your Job Stays The Same
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-10 md:mb-12">
            You Install Solar. We Handle Everything Else.
          </h2>

          <div className="space-y-4 max-w-md mx-auto text-left">
            {DONT_DO.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-orange font-bold text-lg shrink-0 leading-tight">✕</span>
                <span className="text-white/60 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-white text-base md:text-lg font-medium mt-10 max-w-xl mx-auto">
            You keep doing what you're good at. We build the pipeline around it.
          </p>
        </div>
      </div>
    </section>
  )
}
