import useScrollReveal from '../hooks/useScrollReveal.js'

const QUALIFICATION_CHECKS = [
  'Confirms property ownership',
  'Checks roof suitability',
  'Verifies their timeline for going solar',
  'Filters out non-serious enquiries',
]

const STEPS = [
  {
    number: '01',
    title: 'We Find Homeowners Already Thinking About Solar',
    paragraphs: [
      'Not random people. Not "interested in saving money." We run hyper-targeted ads to homeowners in your area who are actively showing buying signals for solar, things like researching energy costs, engaging with solar content, or owning the right property type.',
      'Your ads only show to people in your specific territory. No overlap with other installers.',
    ],
  },
  {
    number: '02',
    title: 'AI Qualifies Every Lead Before You Ever See Them',
    paragraphs: [
      "Here's where most lead gen falls apart. You get a name and number, then waste 20 minutes calling someone who lives in a flat or rents their house.",
      'Our AI assistant contacts every lead within 60 seconds of them filling out the form. It has a real conversation and filters out anyone who isn\'t a genuine prospect.',
      'Before a lead reaches your calendar, they\'ve been checked on:',
    ],
    checklist: QUALIFICATION_CHECKS,
    closing: "If they don't qualify, they never reach your calendar. If they do, the AI books them straight in.\n\nThis isn't a basic chatbot sending \"Thanks for your enquiry!\" It asks the same questions your best salesperson would ask, just faster and at 11pm on a Sunday when you're not working.",
  },
  {
    number: '03',
    title: 'Qualified Bookings Appear In Your Calendar',
    paragraphs: [
      "You get a notification. Name, number, property details, qualification answers, and a booked time slot. No chasing. No phone tag. No calling back leads from three days ago who've already gone with someone else.",
      "You check your calendar in the morning, see who you're visiting, and go quote.",
    ],
  },
  {
    number: '04',
    title: 'We Collect 5-Star Reviews After Every Install',
    paragraphs: [
      'After you complete the job, our system automatically follows up with the homeowner and makes it easy for them to leave a Google review.',
      "Most solar companies have 10-30 reviews. We help you build a review profile that compounds over time, so your word-of-mouth gets stronger even while paid leads keep coming in.",
    ],
  },
]

function StepCard({ step, index }) {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`flex gap-5 md:gap-6 items-start p-6 border border-white/10 rounded-xl reveal stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
    >
      <div className="shrink-0">
        <span className="text-orange text-sm font-bold uppercase tracking-widest block mb-1">Step</span>
        <span className="text-orange text-3xl md:text-4xl font-extrabold">{step.number}</span>
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-3">
          {step.title}
        </h3>
        <div className="space-y-3">
          {step.paragraphs.map((p, i) => (
            <p key={i} className="text-white/60 text-sm md:text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        {step.checklist && (
          <ul className="mt-4 space-y-2">
            {step.checklist.map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-white/80 text-sm md:text-base">
                <svg viewBox="0 0 24 24" fill="none" stroke="#E65224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        )}
        {step.closing && (
          <div className="mt-4 space-y-3">
            {step.closing.split('\n\n').map((p, i) => (
              <p key={i} className="text-white/60 text-sm md:text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Steps() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className={`text-center mb-10 md:mb-14 reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            How It Works <span className="text-orange">(And Why The Leads Are Different)</span>
          </h2>
        </div>

        <div className="space-y-5">
          {STEPS.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
