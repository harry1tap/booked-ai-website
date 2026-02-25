import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Book() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.type = 'text/javascript'
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-1 flex flex-col items-center px-6 pb-12 pt-14 md:pt-12">
        <Link to="/">
          <img src="/SVG (4).svg" alt="Booked AI" className="h-10 md:h-14 mx-auto mb-8" />
        </Link>
        {/* Striped progress banner */}
        <div id="calendar" className="w-full max-w-2xl mb-6 rounded-full overflow-hidden h-10 relative bg-white/10">
          <div className="absolute inset-y-0 left-0 w-[70%] stripe-animated rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">
              Select a Date & Time Below
            </span>
          </div>
        </div>

        <div className="w-full max-w-2xl overflow-hidden" style={{ minHeight: '600px' }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/pwUIJem2nmZiOiYJfNFr"
            title="Book a call with Booked AI"
            className="w-full border-0"
            scrolling="no"
            id="pwUIJem2nmZiOiYJfNFr_1771685774583"
            style={{ width: '100%', overflow: 'hidden', minHeight: '600px' }}
          />
        </div>

        <div className="mt-4 py-5 px-6 border border-orange/30 rounded-lg bg-orange/5 max-w-xl mx-auto text-center">
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

      </div>

      {/* Final CTA — scrolls back to calendar */}
      <section className="bg-orange py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-tight mb-5">
            Ready to Become A Leader?
          </h2>

          <p className="text-black/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Schedule a casual chat with us today and we'll walk you through exactly how it works.
          </p>

          <a
            href="#calendar"
            className="inline-block bg-black px-8 py-3.5 rounded hover:bg-black/80 transition-colors duration-200"
          >
            <span className="block text-orange font-bold text-base md:text-lg">Apply For Your Area</span>
            <span className="block text-xs text-white/30 font-medium">1 Installer Per Area</span>
          </a>
        </div>
      </section>
    </div>
  )
}
