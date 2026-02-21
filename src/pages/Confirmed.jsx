import { Link } from 'react-router-dom'

export default function Confirmed() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-1 flex flex-col items-center px-6 pb-12 pt-14 md:pt-12">
        <Link to="/">
          <img src="/SVG (4).svg" alt="Booked AI" className="h-10 md:h-14 mx-auto mb-8" />
        </Link>

        {/* Striped progress banner — 90% full */}
        <div className="w-full max-w-2xl mb-10 rounded-full overflow-hidden h-10 relative bg-white/10">
          <div className="absolute inset-y-0 left-0 w-[90%] stripe-animated rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">
              Wait! Final Step Before Our Call...
            </span>
          </div>
        </div>

        {/* Two steps */}
        <div className="w-full max-w-xl space-y-6">
          <div className="flex gap-5 items-start p-6 border border-orange/30 rounded-lg bg-orange/5">
            <span className="text-orange text-3xl md:text-4xl font-extrabold shrink-0">01</span>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Mark Your Calendar
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                We've just sent you a confirmation email with the date and time. Add it to your calendar now so you don't miss it.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-start p-6 border border-orange/30 rounded-lg bg-orange/5">
            <span className="text-orange text-3xl md:text-4xl font-extrabold shrink-0">02</span>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Confirm Your Attendance
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                We'll send you a quick SMS or WhatsApp 24 hours before the call. Just reply to let us know you're good to go and confirm your attendance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
