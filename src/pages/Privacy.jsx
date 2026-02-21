import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black">
      <header className="max-w-3xl mx-auto px-6 md:px-12 pt-14 md:pt-12">
        <Link to="/">
          <img src="/SVG (4).svg" alt="Booked AI" className="h-10 md:h-14" />
        </Link>
      </header>

      <div className="max-w-3xl mx-auto px-6 md:px-12 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
          Privacy Policy
        </h1>

        <div className="text-white/60 text-base leading-relaxed space-y-4">
          <p>Privacy policy content coming soon.</p>
        </div>

        <Link
          to="/"
          className="inline-block mt-10 text-orange hover:underline text-sm font-medium"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
