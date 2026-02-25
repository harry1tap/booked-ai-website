import useScrollReveal from '../hooks/useScrollReveal.js'

const STEPS = [
  {
    number: '01',
    title: 'We Find The Right Homeowners',
    description: "Not everyone scrolling Facebook wants solar. We run targeted ads to reach homeowners in your area who are already thinking about it, the ones comparing quotes, checking EPC ratings, or looking into the SEG tariff. The kind of people who are ready to move, not just browsing.",
  },
  {
    number: '02',
    title: 'AI Qualifies In Under 60 Seconds',
    description: "The moment someone enquires, our AI picks up the conversation. Confirms they own the property, checks their roof situation, asks about energy bills and budget, and filters out anyone who isn't serious. No more driving 40 minutes to find out they have a £2k budget.",
  },
  {
    number: '03',
    title: 'Serious Prospects Get Booked Into Your Calendar',
    description: "The ones who pass qualification get booked directly into your diary, with all their details attached. You get a notification, you show up, you quote. That's your only job in this process.",
  },
  {
    number: '04',
    title: 'Your Reviews Grow After Every Install',
    description: "After you complete a job, our system sends your customer a review request right when they're the happiest. Your Google profile builds itself, more reviews, higher rankings, more trust. Over time, you become the obvious choice before someone even clicks an ad.",
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
        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
          {step.title}
        </h3>
        <p className="text-white/60 text-sm md:text-base leading-relaxed">
          {step.description}
        </p>
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
          <p className="text-orange text-sm font-bold uppercase tracking-widest mb-3">
            Step By Step
          </p>
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
