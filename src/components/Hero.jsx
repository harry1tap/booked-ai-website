import { Link } from 'react-router-dom'

const CLIENT_LOGOS = [
  { name: 'Client 1', src: '/meta.png' },
  { name: 'Client 2', src: '/google.png' },
  { name: 'Client 3', src: '/highlevel.webp' },
]

export default function Hero() {
  return (
    <section className="bg-black pt-16 md:pt-20 pb-6 md:pb-8">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full text-center">
        <img
          src="/SVG (4).svg"
          alt="Booked AI"
          className="h-10 md:h-14 mx-auto mb-8"
        />

        <p className="text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
          Limited to 1 installer per region. Check if your area's still open.
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-tight mb-4">
          Pre-Qualified Solar Survey Bookings. <span className="text-orange">You Only Pay Per Appointment.</span>
        </h1>

        <p className="text-white/60 text-sm md:text-base font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Qualified homeowners, already interested in solar, booked into your calendar before you've finished your current install. You show up, quote, close.
        </p>

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
          <span className="block font-bold text-base md:text-lg text-white">Check If Your Area's Still Open</span>
        </Link>

        {/* Client logos */}
        <div className="mt-8 pt-6 border-t border-white/10">
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
