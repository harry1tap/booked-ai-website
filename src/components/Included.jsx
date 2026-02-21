import useScrollReveal from '../hooks/useScrollReveal.js'

const SERVICES = [
  {
    title: 'Targeted Meta Ad Campaigns',
    description: 'Ads that reach the right homeowners in your area.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Custom AI Booking Agent',
    description: "Built from scratch. Qualifies, follows up, and books. Not white-label.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Website Revamp',
    description: 'A site that actually converts visitors into enquiries.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: 'Missed Call Text Back',
    description: "WhatsApp + SMS instant response when you can't answer.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.05 2a9 9 0 0 1 8 7.94" />
        <path d="M14.05 6A5 5 0 0 1 18 10" />
      </svg>
    ),
  },
  {
    title: 'Automated Google Reviews',
    description: 'Build your reputation on autopilot.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Weekly Performance Reports',
    description: "Clear numbers. No fluff. Know exactly what's working.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    title: 'Monthly Strategy Calls',
    description: 'We plan the next month together. Your input shapes the system.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    title: 'Direct WhatsApp Access',
    description: 'Message us anytime. No tickets. No waiting.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useScrollReveal(0.05)

  return (
    <div
      ref={ref}
      className={`p-5 md:p-6 border border-white/10 rounded-lg hover:border-orange/40 transition-colors duration-300 text-center reveal stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
    >
      <div className="text-orange mb-3 flex justify-center">{service.icon}</div>
      <h3 className="text-white font-bold text-base mb-1.5">{service.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
    </div>
  )
}

export default function Included() {
  const [headingRef, headingVisible] = useScrollReveal()
  const [dreamRef, dreamVisible] = useScrollReveal(0.2)

  return (
    <section id="whats-included" className="bg-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div
          ref={headingRef}
          className={`mb-12 md:mb-16 text-center reveal ${headingVisible ? 'visible' : ''}`}
        >
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3">
            Everything you get
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Not just leads. A complete growth system.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Dream outcome */}
        <div
          ref={dreamRef}
          className={`mt-16 md:mt-20 pt-10 border-t border-orange/30 text-center reveal ${dreamVisible ? 'visible' : ''}`}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
            Picture this.
          </h3>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Your pipeline fills up on its own. Appointments land in your diary while you're on the tools. No more missed leads. No more cold follow-ups.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              You become the highest-rated, most visible business in your area. You stop being a stressed tradesperson chasing work, and start running a business that runs itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
