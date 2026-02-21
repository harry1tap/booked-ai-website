import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src="/SVG (4).svg" alt="Booked AI" className="h-7" />

        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@bookedai.co.uk"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            hello@bookedai.co.uk
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-6 pt-4 border-t border-white/5">
        <p className="text-white/20 text-[0.65rem] leading-relaxed text-center max-w-3xl mx-auto mb-4">
          Growth examples are only estimates of what is possible to achieve. Results are based on many factors. Every business is unique and might experience different results. By leaving your details you agree that our company is not responsible for the success or failure of your business decisions relating to any information presented by our company, or our company products or services.
        </p>
        <div className="flex items-center justify-center gap-4 mb-3">
          <Link to="/terms" className="text-white/30 hover:text-white/60 text-[0.65rem] transition-colors">
            Terms of Service
          </Link>
          <span className="text-white/10">|</span>
          <Link to="/privacy" className="text-white/30 hover:text-white/60 text-[0.65rem] transition-colors">
            Privacy Policy
          </Link>
        </div>
        <p className="text-white/30 text-xs text-center">
          &copy; {new Date().getFullYear()} BookedAI.co.uk
        </p>
      </div>
    </footer>
  )
}
