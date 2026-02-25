import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal.js'

const QUESTIONS = [
  {
    q: 'How quick is the setup?',
    a: "14 days from onboarding to your first ads running. Most clients see their first booked survey within 2-3 weeks.",
  },
  {
    q: 'What counts as a "booked survey"?',
    a: "A homeowner who has confirmed they own the property, told us about their roof, energy bills, and budget, and has a survey appointment in your calendar. Not a name on a list. A real person expecting you to show up.",
  },
  {
    q: "How's this different from the last agency I tried?",
    a: "Most agencies hand you leads and wish you luck. We respond to every lead in under 60 seconds, qualify them automatically, and book only the serious ones into your calendar. You don't chase anyone. That's the difference.",
  },
  {
    q: "What if you don't deliver?",
    a: "If we don't hit 20 booked, qualified surveys in 90 days, we keep working for free until we do. We take the risk, not you.",
  },
  {
    q: 'What do I need to spend on ads?',
    a: "We recommend a minimum of £500/month, paid directly to Meta. One extra installation more than covers your entire investment.",
  },
  {
    q: 'What does "1 per area" mean?',
    a: "We only take one solar installer per region. We'll never run ads for your competitor. Your area is yours.",
  },
  {
    q: "I've been burned by Facebook ads before.",
    a: "So have most of the installers we speak to. The issue usually isn't the ads, it's the follow-up. Leads came in but nobody called back fast enough, or they weren't qualified. Our AI fixes both: instant response, automatic qualification, and only the real prospects reach you.",
  },
]

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-white font-bold text-sm md:text-base pr-4">{item.q}</span>
        <span className="text-orange text-xl font-bold shrink-0 w-6 text-center">
          {open ? '−' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-white/60 text-sm md:text-base leading-relaxed pr-10">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
        >
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3 text-center">
            Questions We Get Asked
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-10 md:mb-12 text-center">
            Before You Ask...
          </h2>

          <div className="border-t border-white/10">
            {QUESTIONS.map((item, i) => (
              <FAQItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
