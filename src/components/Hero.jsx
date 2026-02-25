import { Link } from 'react-router-dom'

const CLIENT_LOGOS = [
  { name: 'Client 1', src: '/meta.png' },
  { name: 'Client 2', src: '/google.png' },
  { name: 'Client 3', src: '/highlevel.webp' },
]

export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-start md:items-center pt-14 md:pt-12 pb-6 md:pb-8">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full text-center">
        <img
          src="/SVG (4).svg"
          alt="Booked AI"
          className="h-10 md:h-14 mx-auto mb-8"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-tight mb-4">
          Fill Your Calendar With <span className="text-orange">Pre-Qualified Solar Surveys</span> On Autopilot
        </h1>

        <p className="text-white/60 text-sm md:text-base font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
          We run targeted Meta Ads to attract homeowners ready to go solar. Our AI responds in 60 seconds, qualifies every lead, and books high-intent surveys straight into your calendar. You just show up and close.
        </p>

        <div className="mb-8 py-5 px-6 border border-orange/30 rounded-lg bg-orange/5 max-w-xl mx-auto">
          <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">
            <span className="text-orange">20-30</span> Qualified, Booked Surveys
          </p>
          <p className="text-lg md:text-xl font-bold text-white/90">
            In Your First 90 Days.
          </p>
          <p className="text-sm text-orange/80 font-medium mt-2">
            Or We Work For Free Until We Deliver
          </p>
        </div>

        {/* Animated chevron */}
        <div className="mb-6 flex justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E65224"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 animate-bounce"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        <Link
          to="/book"
          className="inline-block bg-orange text-black px-8 py-3.5 rounded hover:scale-105 hover:brightness-110 transition-all duration-200"
        >
          <span className="block font-bold text-base md:text-lg text-white">Become A Leader</span>
          <span className="block text-xs text-white/50 font-medium">1 Trade Per Area</span>
        </Link>

        {/* Client logos */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex items-center justify-center gap-6 md:gap-8">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="w-20 h-20 md:w-[7.5rem] md:h-[7.5rem] rounded-lg border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden"
                title={client.name}
              >
                {client.src ? (
                  <img src={client.src} alt={client.name} className="w-full h-full object-contain p-2" />
                ) : (
                  <span className="text-white/30 text-sm font-bold">{client.initials}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
