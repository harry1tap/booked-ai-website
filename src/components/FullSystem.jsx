import useScrollReveal from '../hooks/useScrollReveal.js'

const SERVICES = [
  {
    title: 'Meta Ad Campaigns',
    description: "Built, managed, and optimised daily. Targeting homeowners in your service area who are actively considering solar, not just anyone who owns a house.",
  },
  {
    title: 'AI Lead Qualification',
    description: "Responds in under 60 seconds. Asks about property type, roof suitability, ownership, energy bills, budget, and timeline. Filters out renters, dreamers, and tyre-kickers automatically.",
  },
  {
    title: 'Calendar Booking',
    description: "Qualified leads get booked directly into your diary with their details attached. You wake up to appointments, not a spreadsheet of names to chase.",
  },
  {
    title: 'SMS, Email & WhatsApp Follow-Up',
    description: "Every lead gets followed up automatically for 7 days. If they're not ready today, the system stays on them so you don't have to.",
  },
  {
    title: 'Automated Review Collection',
    description: "After every completed install, your customer gets a review request. No awkward conversations. Your Google profile grows on autopilot.",
  },
  {
    title: 'Monthly Reporting & Strategy Call',
    description: "See exactly what's happening, leads, bookings, cost per lead, pipeline value. Plus a 30-minute monthly call to review and plan ahead.",
  },
]

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`p-6 border border-white/10 rounded-xl reveal stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
    >
      <h3 className="text-base md:text-lg font-bold text-white mb-2">
        {service.title}
      </h3>
      <p className="text-white/60 text-sm md:text-base leading-relaxed">
        {service.description}
      </p>
    </div>
  )
}

export default function FullSystem() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`text-center mb-10 md:mb-14 reveal ${isVisible ? 'visible' : ''}`}
        >
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3">
            What's Under The Bonnet
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            The Full System, Set Up In 14 Days
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
